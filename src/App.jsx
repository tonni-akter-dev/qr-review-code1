import './App.css'
import Banner from './components/Banner'
import Benefits from './components/Benefits'
import Brands from './components/Brands'
import Buisness from './components/Buisness'
import ClientReviewSlider from './components/ClientReviewSlider'
import Contact from './components/Contact'
import CustomerFeedback from './components/CustomerFeedback'
import { Faq } from './components/Faq'
import Footer from './components/Footer'
import Header from './components/Header'
import HowItWorks from './components/HowItWorks'
import Pricing from './components/Pricing'
import Reviews from './components/Reviews'


function App() {
  return (
    <div className='bg-[#FFFEF5]'>
      <Header />
      <Banner />
      <CustomerFeedback />
      <Reviews />
      <Buisness />
      <HowItWorks />
      <Benefits />
      <Pricing />
      <Faq />
      <ClientReviewSlider />
      <Contact />
      <Brands />
      <Footer />
    </div>
  )
}

export default App
