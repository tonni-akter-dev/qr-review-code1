import { Route, Routes } from 'react-router'
import './App.css'
import Home from './Home'
import Header from './components/Header'
import Footer from './components/Footer'
import ContactPage from './ContactPage'

function App() {
  return (
    <div className='bg-[#FFFEF5]'>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
