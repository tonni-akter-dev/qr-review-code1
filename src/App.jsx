import { Route, Routes } from 'react-router'
import './App.css'
import Home from './Home'
import Header from './components/Header'
import Footer from './components/Footer'
import ScrollToTop from './pages/ScrollToTop'
import PricingPage from './pages/PricingPage'

function App() {
  return (
    <div className='bg-[#FFFEF5]'>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pricing" element={<PricingPage />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
