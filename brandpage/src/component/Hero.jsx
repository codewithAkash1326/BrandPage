import React from 'react'
import '../component/Hero.css'
const Hero = () => {
  return (
     <main className='hero container'>

        <div className='hero-content'>

            <h1>YOUR FEET  DESERVE THE BEST</h1>
             <p>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>


             <div className='hero-btn'>
                <button>Shop Now</button>
                <button className='btn2'>Category</button>
             </div>

             <div className='shopping'>
                <p>Also available on</p>
                 
                 <div className='brand-icons'>
                 <img src="./assets/flipkart.png" alt="" />
                 <img src="./assets/amazon.png" alt="" />
                 </div>
             </div>

        </div>


        <div className='hero-image'>
        <img src="./assets/shoe_image.png" alt="" />
        </div>
     </main>
  )
}

export default Hero
