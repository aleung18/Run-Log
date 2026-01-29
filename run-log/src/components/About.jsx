import React from 'react'

const About = ({ closePopup }) => {
  return (
    <section className='popup'>
      <div className='popup-inner sm:max-w-[550px] max-w-[300px] font-dmMono text-lightgrey'>
        <button className='close-btn text-[24px]' onClick={closePopup}>close</button>
        
        <h2>why i run: </h2>
        <p>because i hate it. i hate getting up early in the morning.</p>
      </div>
    </section>
  )
}

export default About