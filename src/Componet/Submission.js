import React from 'react'
import "./Second.scss"

import one from './3.jpeg'
import two from "./4.jpeg"
import three from './7.jpeg'
function Submission() {
  return (
    <div>
    <div className='photo'>
    
    <div className='main'>
    <p>THANK FOR BOOKING THE HOTEL </p>
     <p> <h6>The atmosphere protects life on earth by shielding it from incoming ultraviolet (UV) radiation, keeping the planet warm through insulation, and preventing extremes between day and night temperatures. <br></br>The sun heats layers of the atmosphere causing it to convect driving air movement and weather patterns around the world.</h6></p>
    </div>
    <div className='zero'>
     <img src={one} width='30%' height="50%"></img>
     <img src={ two} width="30%" height="50%"></img>
   
     </div>
    
    <div className='last'>
      <img src={three} width="30%" height="40%"></img>
    </div>
    </div>
    </div>
  )
}

export default Submission