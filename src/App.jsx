import './App.css'
import Buisness from './components/Buisness'
import CustomerFeedback from './components/CustomerFeedback'
import Header from './components/Header'
import Reviews from './components/Reviews'

function App() {
  return (
    <div className='bg-[#FFFEF5]'>
      <Header />
      <CustomerFeedback />
      <Reviews />
      <Buisness />
    </div>
  )
}

export default App
