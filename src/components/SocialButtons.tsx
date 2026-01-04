import { Facebook, Instagram, Youtube } from 'lucide-react'
import { FaTiktok } from 'react-icons/fa'

export default function SocialButtons() {
  const socials = [
    { name: 'Facebook', icon: Facebook, url: '#', color: 'bg-blue-600 hover:bg-blue-700' },
    { name: 'Instagram', icon: Instagram, url: '#', color: 'bg-pink-600 hover:bg-pink-700' },
    { name: 'TikTok', icon: FaTiktok, url: '#', color: 'bg-black hover:bg-gray-800', isTiktok: true },
    { name: 'YouTube', icon: Youtube, url: '#', color: 'bg-red-600 hover:bg-red-700' }
  ]

  return (
    <div className="fixed right-4 md:right-6 bottom-4 md:bottom-6 flex flex-col gap-2 md:gap-3 z-40">
      {socials.map((social) => (
        <a
          key={social.name}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className={`${social.color} text-white p-2 md:p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-2xl group relative`}
          aria-label={social.name}
        >
          {social.isTiktok ? (
            <social.icon className="w-5 h-5 md:w-6 md:h-6" />
          ) : (
            <social.icon size={20} className="md:w-6 md:h-6" />
          )}
          
          {/* Tooltip */}
          <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-gray-900 text-white px-3 py-1 rounded-lg text-sm font-semibold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none hidden md:block">
            {social.name}
          </span>
        </a>
      ))}
    </div>
  )
}
