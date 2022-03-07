import './Reset.css'
import './App.css'
import Navbar from './layouts/navbar/Navbar'
import Hero from './layouts/hero/Hero'
import Reasons from './layouts/reasons/Reasons'
import AboutUs from './layouts/aboutus/AboutUs'
import Services from './layouts/services/Services'
import Stats from './layouts/stats/Stats'
import Ad from './layouts/ad/Ad'
import Projects from './layouts/projects/Projects'
import Form from './layouts/form/Form'
import Bottom from './layouts/bottom/Bottom'
import Footer from './layouts/footer/Footer'


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
      <div className="InnerContainer">
        <Projects />
      </div>
      <Form />
      <div className="InnerContainer">
        <Bottom />
      </div>
      <Footer />
    </div>
  );
}

export default App
