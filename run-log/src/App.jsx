import React from 'react'
import { Navbar, Hero, Footer, About, RunLog } from './components'

import { useState } from 'react'

const App = () => {
  const [aboutPopup, setAboutPopup] = useState(false);
  const [runLogPopup, setRunLogPopup] = useState(false);
  return (
    <div className='min-h-screen flex flex-col overflow-hidden'>
      <div>
        <Navbar />
      </div>
      <Hero />
      <div className='mt-auto p-10 sm:block hidden'>
        <Footer />
      </div>
    </div>
  )
}

export default App