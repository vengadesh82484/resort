import React from 'react'
import './Fronts.scss'
import { Link } from 'react-router-dom'
function Front() {
  return (
    <div>
     
        
        <nav>
        <div ><label>BEACH RESORT</label></div>
          <ui>
         <Link to='/'> <li>HOME</li></Link>  
           <Link to='/Detail'><li>PARTY HALL</li></Link> 
            <li>CONTACT</li>
            <li>FEEDBACK</li>
          </ui>
        </nav>
    
    </div>
  )
}

export default Front