import './Reset.css'
import './App.css'
import Navbar from './layouts/navbar/Navbar'
import Hero from './layouts/hero/Hero'
import Reasons from './layouts/reasons/Reasons'
import AboutUs from './layouts/aboutus/AboutUs'
import Services from './layouts/services/Services'
import Stats from './layouts/stats/Stats'
import Ad from './layouts/ad/Ad'


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
      </div>
      <Services />
      <div className="InnerContainer">
        <Stats />
      </div>
      <Ad />
    </div>
  );
}

export default App
