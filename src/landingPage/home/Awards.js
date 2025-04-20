import React from 'react'

function Awards() {
  return (
    <div className='container p-5 mt-5 mb-5'>
      <div className='row p-2 mb-5'>
        <div className='col-6'>
          <img src='media/images/largestBroker.svg'style={{width:"80%"}}/>
        </div>
        <div className='col-6'>
          <h1 className='mb-4 fs-2'>Largest stock Broker in India</h1>
          <p className='text-muted'>That's why 1.5+ crore customers trust Zerodha with ₹4.5+ lakh crores of equity investments and contribute to 15% of daily retail exchange volumes in India.</p>
          <div className='row'>
            <div className='col-6'>
            <ul>
            <li>
              <p>Future and Options</p>
            </li>
            <li>
              <p>Comodity Derivatives</p>
            </li>
            <li>
              <p>Currency Derivatives</p>
            </li>
          </ul>
            </div>
            <div className='col-6 mb-3'>
              <ul>
              <li>
              <p>Stocks & IPOs</p>
            </li>
            <li>
              <p>Direct mutual funds</p>
            </li>
            <li>
              <p>Bonds and Govt. Securities</p>
            </li>
              </ul>
            </div>
          <img src='media/images/pressLogos.png' style={{width:"90%",margin:"0 auto"}}/>
          </div>
          
        </div>
      </div>
        
    </div>
  )
}

export default Awards
