import React from 'react'

function Pricing() {
  return (
    <div className='container p-5'>
      <div className='row p-5'>
        <div className='col-4'>
          <h1 className='fs-2 mb-3'>Unbeatable pricing</h1>
          <p className='text-muted'>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
          <a href='' style={{textDecoration:"none"}}>See Pricing <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
        </div>
        <div className='col-2'></div>
        <div className='col-6'>
          <div className='row text-center'>
            <div className='col'>
              <img src='media/images/zero.svg'/>
              <p className='text-muted'>
                Free account
                <br/>
                opening
              </p>
            </div>
            <div className='col'>
            <img src='media/images/zero.svg'/>
            <p className='text-muted'>
              Free equity delivery
                <br/>
                and direct mutual funds
              </p>
            </div>
            <div className='col'>
            <img src='media/images/twenty.svg'/>
            <p className='text-muted'>
            Intraday and
                <br/>
                F&O
              </p>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Pricing
