import Banner from './components/Banner'
import CustomerFeedback from './components/CustomerFeedback'
import Reviews from './components/Reviews'
import Buisness from './components/Buisness'
import HowItWorks from './components/HowItWorks'
import Benefits from './components/Benefits'
import Pricing from './components/Pricing'
import { Faq } from './components/Faq'
import ClientReviewSlider from './components/ClientReviewSlider'
import Contact from './components/Contact'
import Brands from './components/Brands'

const Home = () => {
    return (
        <>
            <Banner />
            <CustomerFeedback />
            {/* <Reviews /> */}
            {/* <Buisness /> */}
            <HowItWorks />
            <Benefits />
            <Pricing />
            <Faq />
            <ClientReviewSlider />
            <Contact />
            <Brands />
        </>
    )
}

export default Home