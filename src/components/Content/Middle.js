
import "./middle.scss"


const Middle = () => {
  

  return (
    <div   className ='Middle'>
       <div className='info-corpoate'>
       
       <div className='h-con'>Transit Pro is a One stop logistic Market place where<br></br> the corporates can:</div>
          <div className='i-con'>
            <br/>1. Carry out their RFQ process or 3pl onboarding process among 10000+ vendors<br/>
            <br/>2. Fulfill any adhoc requirement by a pool of TP assured vendors. <br/>
            <br/> 3. Leverage TP’s Market Intelligence which is closely based on the real-time industry trends.<br/>
            <br/>4. Leverage TP’s Dynamic Feedback Intelligence that captures inside out data, right from vendor rating to it’s SLA rating.<br/>
            <br/> 5. Leverage TP’s Vendor data for due diligence before onboarding.<br/>
          </div> 
       </div>
       <div>
        <div className='mcontainer'>
       <div class="shadow p-3 mb-5 bg-body rounded">
       <form>
        <div class="mb-3">
        <label for="exampleInputContact" class="form-label">Contact No.</label>
        <input type="tel" pattern='[0-9]{10}' class="form-control" id="contact" aria-describedby="contact-s"/>
       
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
         <button type="submit" class="btn btn-primary" >Login</button>
         </div>
         </div>
      
    </div>
    </div>
  )
}

export default Middle