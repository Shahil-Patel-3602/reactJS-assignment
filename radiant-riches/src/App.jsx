import Navbar from './components/Navbar'
import Hero from './components/Hero'
import SignUp from './components/SignUp'
import RelatedDeals from './components/RelatedDeals'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <RelatedDeals />
      <SignUp />
      <Footer />
    </div>
  )
}

export default App