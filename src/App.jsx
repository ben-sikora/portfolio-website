import './App.css'
import styles from './style'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Hero2 from './components/Hero2'
import About from './components/About'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Break from './components/Break'

function App() {


  return (
    <div>
      <div className= "m-0 w-full overflow-hidden bg-white sm:bg-slate-600 md:bg-red-200 lg:bg-blue-200">
        <div className= "w-full xl:w-[1280px] overflow-hidden mx-auto">
          <Navbar />
          <div className= "mx-10">
            <Hero2 />
            <Break />
            <About />
            <Break />
            <Projects />
            <Break />
            <Experience />
            <Break />
            <Contact />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
