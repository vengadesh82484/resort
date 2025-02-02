
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
  
  
  </div>
</form>
</div>