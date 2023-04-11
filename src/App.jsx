import './App.css'
import styles from './style'
import Navbar from './components/Navbar'
import Hero from './components/Hero'

function App() {


  return (
    <div>
      <div className= "m-0 w-full overflow-hidden">
        <div className= "w-full xl:w-[1280px] overflow-hidden mx-auto">
          <Navbar />
          <div className= "mx-10 overflow-hidden">
            <Hero />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
