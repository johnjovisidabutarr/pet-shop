import '../App.css'
import About from '../components/About/About'
import HeroSection from '../components/HeroSection/HeroSection'
import NavigationBar from '../components/NavigationBar/NavigationBar'
import Services from '../components/Services/Services'
import Products from '../components/Products/Products'
import Footer from '../components/Footer/Footer'

const Home = () => {
  return (
    <div>
      <NavigationBar />
      <HeroSection />

      <div className='container'>
        <About />
        <Services />
        <Products />
      </div>
      <Footer />
    </div>
  )
}

export default Home
