

import './App.css'
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
      </div>
    </>
  )
}

export default App
