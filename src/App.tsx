import './App.css'
import './index.css'
import Header from './components/Header'
import Features from './components/Features'
import CommunitySection from './components/CommunitySection'
import Footer from './components/Footer'
import banner from './assets/banner.png'

export default function App() {
  return (
    <div className="font-sans text-gray-800 bg-white">
      <div className="bg-gradient-to-r from-red-500 to-teal-400 text-white text-center">
        <img src={banner} alt="Tania's Spinning Club Banner" className="w-full h-auto" />
      </div>
      <Header />
      <main>
        <section className="bg-gradient-to-br from-red-500 via-yellow-400 to-pink-500 text-white text-center py-32 px-8 min-h-[60vh] flex flex-col justify-center items-center animate-pulse">
          <a href="#classes" className="bg-orange-500 hover:bg-orange-600 text-white py-4 px-10 rounded-full font-bold text-xl transition duration-300 shadow-lg hover:shadow-xl">Únete Ahora</a>
        </section>
        <Features />
        <CommunitySection />
      </main>
      <Footer />
    </div>
  )
}
