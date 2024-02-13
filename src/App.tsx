

import './App.css'
import { Footer } from './components/common/Footer'
import { Navbar } from './components/common/Navbar'
import { AllRoutes } from './pages/AllRoutes'


function App() {
  

  return (
    <>
      <div className="App bg-[#2e3234] text-[#d1cdc7] min-h-screen">
        <Navbar />
        <div className='pt-4'>
          <AllRoutes />
        </div>
        <div className='pt-10 pb-7'>
          <Footer />
        </div>
      </div>
    </>
  )
}

export default App
