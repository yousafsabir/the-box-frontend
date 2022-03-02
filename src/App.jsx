import './Reset.css'
import './App.css'
import Navbar from './layouts/navbar/Navbar'
import Hero from './layouts/hero/Hero'
import Reasons from './layouts/reasons/Reasons'


function App() {
  return (
    <div className="Container">
      <div className="InnerContainer">
        <Navbar />
      </div> 
      <Hero />
      <div className="InnerContainer">
        <Reasons />
      </div>
    </div>
  )
}

export default App
