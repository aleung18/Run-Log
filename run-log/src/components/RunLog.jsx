import React from 'react'

const RunLog = ({closePopup}) => {
  return (
    <section className='popup'>
        <div className='popup-inner sm:max-w-[550px] max-w-[300px] font-dmMono text-lightgrey'>
            <button className='close-btn text-[24px]' onClick={closePopup}>close</button>

            <h2>ashton's run log</h2>
            <p>data from Strava API.</p>
        </div>
    </section> 
  )
}

export default RunLog