import { useState } from 'react'
import { User, Mail, Phone, MapPin, Upload, X, AlertCircle } from 'lucide-react'

interface FormErrors {
  nombre?: string
  email?: string
  telefono?: string
  pais?: string
  foto?: string
}

const PAISES_ONU = [
  'Afganistán', 'Albania', 'Alemania', 'Andorra', 'Angola', 'Antigua y Barbuda', 'Arabia Saudita', 
  'Argelia', 'Argentina', 'Armenia', 'Australia', 'Austria', 'Azerbaiyán', 'Bahamas', 'Bangladés', 
  'Barbados', 'Baréin', 'Bélgica', 'Belice', 'Benín', 'Bielorrusia', 'Birmania', 'Bolivia', 
  'Bosnia y Herzegovina', 'Botsuana', 'Brasil', 'Brunéi', 'Bulgaria', 'Burkina Faso', 'Burundi', 
  'Bután', 'Cabo Verde', 'Camboya', 'Camerún', 'Canadá', 'Catar', 'Chad', 'Chile', 'China', 
  'Chipre', 'Colombia', 'Comoras', 'Congo', 'Corea del Norte', 'Corea del Sur', 'Costa de Marfil', 
  'Costa Rica', 'Croacia', 'Cuba', 'Dinamarca', 'Dominica', 'Ecuador', 'Egipto', 'El Salvador', 
  'Emiratos Árabes Unidos', 'Eritrea', 'Eslovaquia', 'Eslovenia', 'España', 'Estados Unidos', 
  'Estonia', 'Esuatini', 'Etiopía', 'Filipinas', 'Finlandia', 'Fiyi', 'Francia', 'Gabón', 'Gambia', 
  'Georgia', 'Ghana', 'Granada', 'Grecia', 'Guatemala', 'Guinea', 'Guinea-Bisáu', 'Guinea Ecuatorial', 
  'Guyana', 'Haití', 'Honduras', 'Hungría', 'India', 'Indonesia', 'Irak', 'Irán', 'Irlanda', 
  'Islandia', 'Islas Marshall', 'Islas Salomón', 'Israel', 'Italia', 'Jamaica', 'Japón', 'Jordania', 
  'Kazajistán', 'Kenia', 'Kirguistán', 'Kiribati', 'Kuwait', 'Laos', 'Lesoto', 'Letonia', 'Líbano', 
  'Liberia', 'Libia', 'Liechtenstein', 'Lituania', 'Luxemburgo', 'Madagascar', 'Malasia', 'Malaui', 
  'Maldivas', 'Malí', 'Malta', 'Marruecos', 'Mauricio', 'Mauritania', 'México', 'Micronesia', 
  'Moldavia', 'Mónaco', 'Mongolia', 'Montenegro', 'Mozambique', 'Namibia', 'Nauru', 'Nepal', 
  'Nicaragua', 'Níger', 'Nigeria', 'Noruega', 'Nueva Zelanda', 'Omán', 'Países Bajos', 'Pakistán', 
  'Palaos', 'Panamá', 'Papúa Nueva Guinea', 'Paraguay', 'Perú', 'Polonia', 'Portugal', 
  'Reino Unido', 'República Centroafricana', 'República Checa', 'República del Congo', 
  'República Democrática del Congo', 'República Dominicana', 'Ruanda', 'Rumania', 'Rusia', 
  'Samoa', 'San Cristóbal y Nieves', 'San Marino', 'San Vicente y las Granadinas', 'Santa Lucía', 
  'Santo Tomé y Príncipe', 'Senegal', 'Serbia', 'Seychelles', 'Sierra Leona', 'Singapur', 'Siria', 
  'Somalia', 'Sri Lanka', 'Suazilandia', 'Sudáfrica', 'Sudán', 'Sudán del Sur', 'Suecia', 'Suiza', 
  'Surinam', 'Tailandia', 'Tanzania', 'Tayikistán', 'Timor Oriental', 'Togo', 'Tonga', 
  'Trinidad y Tobago', 'Túnez', 'Turkmenistán', 'Turquía', 'Tuvalu', 'Ucrania', 'Uganda', 
  'Uruguay', 'Uzbekistán', 'Vanuatu', 'Venezuela', 'Vietnam', 'Yemen', 'Yibuti', 'Zambia', 'Zimbabue'
]

export default function RegisterForm({ onClose }: { onClose: () => void }) {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    pais: '',
    foto: null as File | null
  })
  const [preview, setPreview] = useState<string | null>(null)
  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [paisInput, setPaisInput] = useState('')
  const [showSuggestions, setShowSuggestions] = useState(false)
  const [filteredPaises, setFilteredPaises] = useState<string[]>([])

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  const validatePhone = (phone: string): boolean => {
    const phoneRegex = /^\+?[\d\s\-()]+$/
    return phoneRegex.test(phone) && phone.replace(/\D/g, '').length >= 7
  }

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    if (!formData.nombre.trim()) {
      newErrors.nombre = 'El nombre es requerido'
    } else if (formData.nombre.trim().length < 2) {
      newErrors.nombre = 'El nombre debe tener al menos 2 caracteres'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'El email es requerido'
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Email inválido'
    }

    if (!formData.telefono.trim()) {
      newErrors.telefono = 'El teléfono es requerido'
    } else if (!validatePhone(formData.telefono)) {
      newErrors.telefono = 'Teléfono inválido'
    }

    if (!formData.pais.trim()) {
      newErrors.pais = 'Selecciona un país'
    } else if (!PAISES_ONU.includes(formData.pais)) {
      newErrors.pais = 'Selecciona un país de la lista'
    }

    if (formData.foto) {
      const validTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp']
      const maxSize = 5 * 1024 * 1024 // 5MB

      if (!validTypes.includes(formData.foto.type)) {
        newErrors.foto = 'Solo se permiten imágenes JPG, PNG o WebP'
      } else if (formData.foto.size > maxSize) {
        newErrors.foto = 'La imagen debe ser menor a 5MB'
      }
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
    // Limpiar error del campo cuando el usuario escribe
    if (errors[name as keyof FormErrors]) {
      setErrors({ ...errors, [name]: undefined })
    }
  }

  const handlePaisChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setPaisInput(value)
    
    if (value.trim()) {
      const filtered = PAISES_ONU.filter(pais => 
        pais.toLowerCase().includes(value.toLowerCase())
      ).slice(0, 8) // Limitar a 8 sugerencias
      setFilteredPaises(filtered)
      setShowSuggestions(true)
    } else {
      setFilteredPaises([])
      setShowSuggestions(false)
    }
    
    setFormData({ ...formData, pais: value })
    if (errors.pais) {
      setErrors({ ...errors, pais: undefined })
    }
  }

  const handleSelectPais = (pais: string) => {
    setPaisInput(pais)
    setFormData({ ...formData, pais })
    setShowSuggestions(false)
    if (errors.pais) {
      setErrors({ ...errors, pais: undefined })
    }
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setFormData({ ...formData, foto: file })
      const reader = new FileReader()
      reader.onloadend = () => setPreview(reader.result as string)
      reader.readAsDataURL(file)
      // Limpiar error de foto
      if (errors.foto) {
        setErrors({ ...errors, foto: undefined })
      }
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)
    try {
      // TODO: Enviar datos al backend
      await new Promise(resolve => setTimeout(resolve, 1000)) // Simular llamada API
      console.log('Registro:', formData)
      alert('¡Registro exitoso! (pendiente conectar con backend)')
      onClose()
    } catch (error) {
      console.error('Error en registro:', error)
      alert('Error al registrar. Intenta de nuevo.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 relative max-h-[90vh] overflow-y-auto">
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-500 hover:text-gray-700" disabled={isSubmitting}>
          <X size={24} />
        </button>

        <h2 className="text-3xl font-bold text-center mb-2 bg-gradient-to-r from-pink-500 to-red-500 bg-clip-text text-transparent">
          Únete al Club
        </h2>
        <p className="text-gray-600 text-center mb-6">Forma parte de nuestra comunidad global</p>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Foto de perfil */}
          <div className="flex flex-col items-center mb-6">
            <div className="relative">
              {preview ? (
                <img src={preview} alt="Preview" className="w-24 h-24 rounded-full object-cover border-4 border-pink-500" />
              ) : (
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-pink-500 to-red-500 flex items-center justify-center">
                  <User size={48} className="text-white" />
                </div>
              )}
              <label className="absolute bottom-0 right-0 bg-white rounded-full p-2 shadow-lg cursor-pointer hover:bg-gray-100">
                <Upload size={16} className="text-pink-500" />
                <input type="file" accept="image/*" onChange={handleFileChange} className="hidden" disabled={isSubmitting} />
              </label>
            </div>
            <p className="text-sm text-gray-500 mt-2">Foto de perfil (opcional)</p>
            {errors.foto && (
              <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                <AlertCircle size={14} /> {errors.foto}
              </p>
            )}
          </div>

          {/* Nombre */}
          <div>
            <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-1">
              <User size={18} className="text-pink-500" />
              Nombre completo *
            </label>
            <input
              type="text"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              disabled={isSubmitting}
              className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none transition ${
                errors.nombre ? 'border-red-500' : 'border-gray-200 focus:border-pink-500'
              }`}
              placeholder="Tu nombre"
            />
            {errors.nombre && (
              <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                <AlertCircle size={14} /> {errors.nombre}
              </p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-1">
              <Mail size={18} className="text-pink-500" />
              Email *
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              disabled={isSubmitting}
              className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none transition ${
                errors.email ? 'border-red-500' : 'border-gray-200 focus:border-pink-500'
              }`}
              placeholder="tu@email.com"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                <AlertCircle size={14} /> {errors.email}
              </p>
            )}
          </div>

          {/* Teléfono */}
          <div>
            <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-1">
              <Phone size={18} className="text-pink-500" />
              Teléfono *
            </label>
            <input
              type="tel"
              name="telefono"
              value={formData.telefono}
              onChange={handleChange}
              disabled={isSubmitting}
              className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none transition ${
                errors.telefono ? 'border-red-500' : 'border-gray-200 focus:border-pink-500'
              }`}
              placeholder="+1 234 567 8900"
            />
            {errors.telefono && (
              <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                <AlertCircle size={14} /> {errors.telefono}
              </p>
            )}
          </div>

          {/* País */}
          <div className="relative">
            <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-1">
              <MapPin size={18} className="text-pink-500" />
              País *
            </label>
            <input
              type="text"
              name="pais"
              value={paisInput}
              onChange={handlePaisChange}
              onFocus={() => {
                if (paisInput.trim()) {
                  const filtered = PAISES_ONU.filter(pais => 
                    pais.toLowerCase().includes(paisInput.toLowerCase())
                  ).slice(0, 8)
                  setFilteredPaises(filtered)
                  setShowSuggestions(true)
                }
              }}
              onBlur={() => {
                // Delay para permitir click en sugerencia
                setTimeout(() => setShowSuggestions(false), 200)
              }}
              disabled={isSubmitting}
              className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none transition ${
                errors.pais ? 'border-red-500' : 'border-gray-200 focus:border-pink-500'
              }`}
              placeholder="Escribe tu país"
              autoComplete="off"
            />
            
            {/* Sugerencias de autocompletado */}
            {showSuggestions && filteredPaises.length > 0 && (
              <div className="absolute z-10 w-full mt-1 bg-white border-2 border-pink-500 rounded-lg shadow-lg max-h-48 overflow-y-auto">
                {filteredPaises.map((pais, index) => (
                  <button
                    key={index}
                    type="button"
                    onClick={() => handleSelectPais(pais)}
                    className="w-full px-4 py-2 text-left hover:bg-pink-100 transition first:rounded-t-lg last:rounded-b-lg"
                  >
                    {pais}
                  </button>
                ))}
              </div>
            )}
            
            {errors.pais && (
              <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                <AlertCircle size={14} /> {errors.pais}
              </p>
            )}
          </div>

          {/* Botón de envío */}
          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full py-3 rounded-lg font-bold text-lg transition duration-300 shadow-lg hover:shadow-xl mt-6 ${
              isSubmitting
                ? 'bg-gray-400 cursor-not-allowed'
                : 'bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600 text-white'
            }`}
          >
            {isSubmitting ? 'Registrando...' : 'Registrarse'}
          </button>
        </form>
      </div>
    </div>
  )
}
