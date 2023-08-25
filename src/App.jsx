import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import MainSection from './components/MainSection'
import OverviewSection from './components/OverviewSection'
import CourseSection from './components/CourseSection'
import About from './components/About'
import ReviewSection from './components/ReviewSection'
import Footer from './components/Footer'





function App() {
  const [count, setCount] = useState(0)
  return (
    <div className=''>
      <div className='wrapper'>

        <div className='flex justify-center m-5  ml-10 rounded-xl bg-white w-full]'>
          <Navbar />
        </div>

        <div className='main-section mt-40'>
          <MainSection />
        </div>

        <div className=''>
          <OverviewSection />
        </div>

        <div>
          <CourseSection />
        </div>

        <div>
           <About />
        </div>

        <div>
          <ReviewSection />
        </div>

        <div>
            <Footer />
        </div>

      </div>



    </div>


  )
}

export default App
