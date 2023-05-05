import './App.css'
import styles from './style'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Hero2 from './components/Hero2'
import About from './components/About'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Contact from './components/Contact'

function App() {


  return (
    <div>
      <div className= "m-0 w-full overflow-hidden">
        <div className= "w-full xl:w-[1280px] overflow-hidden mx-auto">
          <Navbar />
          <div className= "mx-10 overflow-hidden">
            <Hero2 />
            <About />
            <Projects />
            <Experience />
            <Contact />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
