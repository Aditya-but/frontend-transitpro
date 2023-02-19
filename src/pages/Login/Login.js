import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import "../Login/login.scss"


const Login = () => {
  return (
    <div>
     <Navbar/>
     <div className='login'>

     <div className='in-log'>

      <div class="form-floating mb-3">
      <div className='login1'>Sign-In</div>
      <hr></hr>  

      <div className='setting'>
      <label for="floatingInput">Email address</label>
      <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"/><br></br>
      <div class="form-floating">
      <label for="floatingPassword">Password</label>   
      <input type="password" class="form-control" id="floatingPassword" placeholder="Password"/>
      <br></br>
     <div>Forgot Password?</div>
     <br></br>
     </div>

     <div className='submit'>
     <button type="submit" class="btn btn-primary">Login</button>
     </div>


     </div>
     
     </div>
     
     </div>
     
     </div>
     
      
    </div>
  )
}

export default Login
