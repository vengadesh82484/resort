import React, { useState } from 'react'
import './Nav.scss'
import front from './1.png'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';
import Front from '../Methods/Front';
function Navbar() {

    const[name,setName]=useState("")
    const[number,setNumber]=useState("")
    const[email,setEmail]=useState("")
    const[person,setPerson]=useState("")
    const [message,setMessage] =useState({name:"",number:"",email:"",person:""})

    const handlesumbit =(e)=>{
        e.preventDefault();
        const show = {name:"",number:"",email:"",person:""}
        localStorage.setItem('myname',name,)
        localStorage.setItem("phone",number)
        localStorage.setItem('mail',email)
        localStorage.setItem('member',person)
        let valid = true;

        if (name === "") {
          show.name="empty"
          toast.error("empty") 
          valid=false 
        }
        
        if (number === "") {
            show.number="empty"
            toast.error("empty") 
            valid=false 
          } else if (number.length>10) {
            show.number="check the digit"
            valid=false
          }
          
        if (email === "") {
            show.email="empty"
            toast.error("empty") 
            valid=false 
          }
          
        if (person === "") {
            show.person="empty"
            toast.error("empty") 
            valid=false 
          }

          setMessage(show)
          if (valid) {
           toast.success("THANK for detail")
           setTimeout(()=>{

             window.location.href="/Submission"
           },3000)
          }


    }
    
  return (
    <div>
        
            

       <Front></Front> 
   
    

    <div className='hlo'>


<form onSubmit={handlesumbit}>
  <div className='f'>
  <div className='na'>
  <label>NAME :</label>
  <input type='text' value={name} onChange={(e)=>{setName(e.target.value)}} required></input><br></br>
  </div>
  <div className='nu'>
  <label>Number :</label>
  <input type='text' value={number} onChange={(e)=>{setNumber(e.target.value)}} required></input><br></br>
  </div>
  <div className='em'>
  <label>Email :</label>
  <input type='email'value={email} onChange={(e)=>{setEmail(e.target.value)}} required></input><br></br>
  </div>
  <div className='pe'>
  <label>person :</label>
  <input type='text' value={person} onChange={(e)=>{setPerson(e.target.value)}}required></input><br></br>
  </div>
  <button type='sumbit'>Sumbit</button>
  <ToastContainer></ToastContainer>
  
  </div>
</form>
</div> 
       

    
    </div>
  )
}

export default Navbar