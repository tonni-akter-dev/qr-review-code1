import './App.css'
import Benefits from './components/Benefits'
import Brands from './components/Brands'
import Buisness from './components/Buisness'
import Contact from './components/Contact'
import CustomerFeedback from './components/CustomerFeedback'
import { Faq } from './components/Faq'
import Header from './components/Header'
import Pricing from './components/Pricing'
import Reviews from './components/Reviews'

function App() {
  return (
    <div className='bg-[#FFFEF5]'>
      <Header />
      <CustomerFeedback />
      <Reviews />
      <Buisness />
      <Benefits />
      <Pricing />
      <Faq />
      <Contact />
      <Brands />
    </div>
  )
}

export default App
