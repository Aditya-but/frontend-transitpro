import React from 'react'
import "./middletwo.scss"

const Middletwo = () => {
  return (
    <div  className='Middle2'>
       <div className='info-Vendor'>
       
       <div className='j-con'>Transit pro is here to give you fair business opportunities<br></br> and democratize the growing logistics sector:</div>
        <div className='k-con'>
           <br/>  1. Find out business opportunities in your region ( rfq’s/tenders or adhoc/real-time delivery requirements available) and bid for these through our platform. <br/>
            <br/>2. We assist you in the bidding process and help you get in touch with the company official. <br/>
            <br/> 3. You get a fair chance to win bids on the basis of your merit &amp; the rates offered by you.<br/>
            <br/>4. We help you become authorized vendors of delivery companies by<br></br> helping you find and get through the onboarding process.<br/>
            </div>
     </div>
     <div>
        <div className='n-container'>
       <div class="shadow p-3 mb-5 bg-body rounded">
       <form>
        <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Contact No.</label>
        <input type="text" class="form-control" id="name" aria-describedby="name-s"/>
       
        <label for="exampleInputEmail1" class="form-label">Email address</label>
        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
       <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
       </div>
        <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">Password</label>
        <input type="password" class="form-control" id="exampleInputPassword1"/>
       </div>
       <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label"> Confirm Password</label>
        <input type="password" class="form-control" id="exampleInputPassword1"/>
       </div>
          <button type="submit" class="btn btn-primary">Register</button>
         </form>    <hr></hr>
         <div id="emailHelp" class="form-text">Already A User?</div>
         <br></br>
         <button type="submit" class="btn btn-primary" > Login</button>
         
         </div>
         </div>
      
    </div>
    </div>
  )
}

export default Middletwo