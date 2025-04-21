import React from 'react'

function Hero() {
  return (
    <div className='container p-5 mb-5'>
      <div className='row text-center'>
        <img src='media/images/HomeHero.png' alt='Hero Image' className='mb-4 mt-4' style={{width:"75%",margin:"0 auto"}}/>
        <h1 className='mt-5'>Invest in everything</h1>
        <p className='text-muted fs-5 p-2'>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
        <button className='p-2 btn btn-primary fs-5 mb-5' style={{width:"15%",margin:"0 auto"}}>Signup Now</button>
      </div>
        
    </div>
  )
}

export default Hero
