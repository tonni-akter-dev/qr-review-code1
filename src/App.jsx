import './App.css'
import CustomerFeedback from './components/CustomerFeedback'
import Header from './components/Header'
import Reviews from './components/Reviews'

function App() {
  return (
    <div className='bg-[#FFFEF5]'>
      <Header />
      <CustomerFeedback />
      <Reviews />
    </div>
  )
}

export default App
