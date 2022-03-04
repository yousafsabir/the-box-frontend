import './Reset.css'
import './App.css'
import Navbar from './layouts/navbar/Navbar'
import Hero from './layouts/hero/Hero'
import Reasons from './layouts/reasons/Reasons'
import AboutUs from './layouts/aboutus/AboutUs'
import Services from './layouts/services/Services'
import Stats from './layouts/stats/Stats'


function App() {
  return (
    <div className="Container">
      <div className="InnerContainer">
        <Navbar />
      </div> 
      <Hero />
      <div className="InnerContainer">
        <Reasons />
        <AboutUs />
        <Services />
        <Stats />
      </div>
    </div>
  )
}

export default App
