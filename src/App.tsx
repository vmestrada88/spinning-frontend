import './index.css'
import { Youtube, Heart, Coffee, ShoppingBag, Users, Play, Dumbbell, Sparkles } from 'lucide-react'
import banner from './assets/banner.png'
import logo from './assets/logo.png'

export default function App() {
  return (
    <div className="font-sans text-gray-800 bg-white">
      {/* Header */}
      <header className="bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-white py-4 px-8 shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Logo" className="h-12 w-12 rounded-full object-cover" />
            <h1 className="text-2xl font-bold">Tania's Spinning Club</h1>
          </div>
          <nav className="flex gap-6">
            <a href="#classes" className="hover:text-yellow-300 font-semibold transition flex items-center gap-2"><Youtube size={20} /> Clases</a>
            <a href="#community" className="hover:text-yellow-300 font-semibold transition flex items-center gap-2"><Users size={20} /> Comunidad</a>
            <a href="#store" className="hover:text-yellow-300 font-semibold transition flex items-center gap-2"><ShoppingBag size={20} /> Tienda</a>
            <a href="#bar" className="hover:text-yellow-300 font-semibold transition flex items-center gap-2"><Coffee size={20} /> Bar</a>
          </nav>
        </div>
      </header>

      {/* Hero con Banner */}
      <section className="relative h-auto flex items-start justify-center">
        <img src={banner} alt="Banner" className="w-full h-auto object-contain" />
        <div className="absolute top-8 z-10 flex items-center justify-center text-center text-white w-full">
          <div>
            <h2 className="text-6xl font-extrabold mb-4 drop-shadow-lg">De Cuba a Miami y el Mundo</h2>
            <p className="text-2xl mb-8 drop-shadow-md">Ejercicio · Música · Liberación · Diversión</p>
            <a href="#classes" className="bg-gradient-to-r from-orange-400 to-pink-500 hover:from-orange-500 hover:to-pink-600 text-white py-4 px-10 rounded-full font-bold text-xl transition duration-300 shadow-2xl inline-flex items-center gap-2">
              <Play size={24} /> Únete Ahora
            </a>
          </div>
        </div>
      </section>

      {/* Clases de YouTube */}
      <section id="classes" className="py-20 px-8 bg-gradient-to-br from-purple-100 to-pink-100">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex justify-center items-center gap-3 mb-4">
            <Youtube size={48} className="text-red-600" />
            <h2 className="text-5xl font-bold text-red-600">Clases en YouTube</h2>
          </div>
          <p className="text-xl text-gray-700 mb-12 max-w-3xl mx-auto">Entrena desde cualquier parte del mundo con nuestras clases llenas de energía, música y motivación. ¡Libera el estrés y diviértete!</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 transform hover:-translate-y-2">
              <Dumbbell size={48} className="text-pink-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-purple-600 mb-3">Clases Intensas</h3>
              <p className="text-gray-600 mb-4">Sesiones completas de spinning con música que te hará mover.</p>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-red-600 font-bold hover:underline flex items-center justify-center gap-2">
                <Play size={20} /> Ver Ahora
              </a>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 transform hover:-translate-y-2">
              <Sparkles size={48} className="text-yellow-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-purple-600 mb-3">Guías de Ejercicios</h3>
              <p className="text-gray-600 mb-4">Técnicas y consejos para mejorar tu rendimiento.</p>
              <a href="#guides" className="text-red-600 font-bold hover:underline">Explorar</a>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 transform hover:-translate-y-2">
              <Heart size={48} className="text-red-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-purple-600 mb-3">Vida Saludable</h3>
              <p className="text-gray-600 mb-4">Consejos de nutrición, bienestar y estilo de vida.</p>
              <a href="#tips" className="text-red-600 font-bold hover:underline">Leer Más</a>
            </div>
          </div>
        </div>
      </section>

      {/* Comunidad */}
      <section id="community" className="py-20 px-8 bg-gradient-to-br from-yellow-400 via-orange-400 to-red-500 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex justify-center items-center gap-3 mb-4">
            <Users size={48} />
            <h2 className="text-5xl font-bold">Nuestra Comunidad Global</h2>
          </div>
          <p className="text-xl mb-12 max-w-3xl mx-auto">Reunimos a personas de Cuba, Miami y todo el mundo. Un espacio para ejercitarse, liberar estrés y crear conexiones.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white bg-opacity-20 p-8 rounded-xl backdrop-blur-md">
              <p className="italic text-lg mb-4">"Tania's Spinning me cambió la vida. ¡Pura energía y comunidad!"</p>
              <cite className="font-bold">- María, La Habana</cite>
            </div>
            <div className="bg-white bg-opacity-20 p-8 rounded-xl backdrop-blur-md">
              <p className="italic text-lg mb-4">"Extraño las clases presenciales, pero esta plataforma nos mantiene unidos."</p>
              <cite className="font-bold">- Carlos, Miami</cite>
            </div>
          </div>
        </div>
      </section>

      {/* Tienda y Bar */}
      <section className="py-20 px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <div id="store" className="text-center">
            <ShoppingBag size={64} className="text-purple-600 mx-auto mb-4" />
            <h2 className="text-4xl font-bold text-purple-600 mb-4">Tienda de Ropa</h2>
            <p className="text-lg text-gray-700 mb-6">Ropa deportiva y artículos de spinning exclusivos del club.</p>
            <p className="text-pink-600 font-bold text-xl">¡Próximamente!</p>
          </div>
          <div id="bar" className="text-center">
            <Coffee size={64} className="text-orange-600 mx-auto mb-4" />
            <h2 className="text-4xl font-bold text-orange-600 mb-4">Bar de Cafés y Cocteles</h2>
            <p className="text-lg text-gray-700 mb-6">Refrescos saludables, cafés y bebidas post-entreno.</p>
            <p className="text-pink-600 font-bold text-xl">¡Próximamente!</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-8 text-center">
        <h3 className="text-3xl font-bold mb-4">Tania's Spinning Club</h3>
        <p className="text-gray-400 mb-6">De Cuba a Miami y el mundo entero. Una comunidad de energía, música y bienestar.</p>
        <p className="text-gray-500">© 2026 Tania's Spinning Club. Todos los derechos reservados.</p>
      </footer>
    </div>
  )
}
