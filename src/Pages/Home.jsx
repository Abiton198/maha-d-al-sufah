import React,{useEffect, useState} from 'react'

export default function Home() {
    const [prayer,setPrayer] = useState("Next Prayer Time is Coming!")
    
    useEffect(()=>{
      islamicEvents()
    },[])
    
    function islamicEvents(){
      const url ='http://api.aladhan.com/v1/timingsByCity?city=Pretoria&country=South%20Africa&method=4'
      fetch(url)
      .then(res => res.json())
      .then(data => setPrayer(data))
    }
  return (
    <div className='home text-center'>
        <h1 className='p-3'>Ma'had-al-Suffah</h1>
        <hr/>
        <p className='home-text'>الله اكبر الله</p>
        <div className='prayer-times'>
          {/* {prayer.map((item)=>(
            <p>{item}</p>
          ))} */}
          {/* {prayer.map(timings => (
            <p className='home-text'>{timings.Fajr}</p>
            ))} */}
          
          </div>
        

            {/* button to trigger the modal */}
            <button className='btn btn-primary mt-4 ml-1' data-toggle='modal' data-target='#myModal'>
                      Launch Modal
                  </button>


          {/* modal box with a fade, pop-up message when one visit the page */}
          <div className='modal fade' id='myModal'>
                  
                  <div className='modal-dialog m-5'>
                      <div className='modal-content'>

                          <div className='modal-header'>
                              <h5 className='modal-title'>Ma'had al-Suffah</h5>
                                  <button type='button' className='close' data-dismiss='modal'></button>
                                      </div>
                                          
                        <div className='modal-body text-justify'>
                              <p> Salaam Aleykum warahmatullah. Ma'had al-Suffah is an Islamic Centre helping communities to develop and come to the 
                                knowldge of Islam. Your support in this regard is highly valued. Insha Allah  </p>
                                      </div>

                          <div className='modal-footer'>
                              <button className='btn btn-primary' data-dismiss='modal'>&times;</button>
                                  </div>
                      </div>
                  </div>
              </div>
    </div>
  )
}
