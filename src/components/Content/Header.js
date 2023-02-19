

import "./header.scss"


const Header = () => {

  // const Hire = useRef(null)
  // const Join = useRef(null)

  // const scrollToSection = (elementRef) => {
  //   window.scrollTo({
  //     top: elementRef.current.offsetTop,
  //     behavior:'smooth'
  //   })
  // }

    
  
  return (
    <div className='header'>
     <div  className='container'>
        <div className='name'>  Transit Pro </div>
        <div  className='intro'>
          RUN YOUR LOGISTIC RFQ'S/TENDERS ON OUR PLATFORM &amp; GET COMPETITIVE BIDS FROM 1000+ VARIED <br></br>3PL VENDORS
        </div>
     <div className='hire-b-con'>
      <div className='hireavendor'>
      <button type="button"  class="btn btn-primary btn-lg" > Hire A Vendor </button>
      </div>

      

      <div className='joinus'>
      <button type="button" class="btn btn-primary btn-lg" >Join As Vendor </button>
      </div>
     </div>

    
     </div>
    </div>
  )
}

export default Header