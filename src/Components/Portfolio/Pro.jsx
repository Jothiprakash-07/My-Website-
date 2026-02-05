import React from 'react'
import './pro.css'
function Pro() {
  return (
    <div className='pro'>
        <div className="portfolio-header">
            {/* Left side text */}
            <div className="header-text">
                {/* Small title */}
                <span className="portfolio-label">Portfolio</span>
                {/* Description */}
                <p>
                    A curated collection of projects showcasing my approach to design challenges.               
                </p>
                </div>

                {/* Right side button */}
                <a href="https://www.behance.net/jothi07"
                className="behance-btn" 
                target="_blank"  rel="noopener noreferrer">
                    View All on Behance ↗
                </a>
        </div>
            {/*card 1*/}

         <div className="page">
            <div className="b-card">
                {/* LEFT IMAGE */}
                <div className="card-image">
                    <img src="./photo/Protfolio/Frame 112.png" alt="landing page"/>
                </div>

                {/* RIGHT CONTENT */}
                <div className="card-content">
                    <h2>Luxury Hotel Website Design</h2>
                    <h4>Project Overview</h4>
                    <p>
                        This project involved designing a premium website experience for 
                        a luxury hotel brand, with a strong focus on elegance, clarity,
                        and high-end visual storytelling. The objective was to create a 
                        digital presence that reflects the hotel’s refined identity while 
                        guiding users effortlessly toward exploration and booking.
                    </p>
                
                    <h4>User Experience</h4>
                    <p>The website was designed with a guest-first mindset,
                         ensuring intuitive navigation, fast readability, and 
                         a responsive layout. Every section was carefully structured 
                         to keep users engaged while maintaining a calm, premium feel.
                    </p> 
                    <div className='btn1'> 
                       <a href="https://www.behance.net/jothi07"
                        className="behance-btn" 
                            target="_blank"  rel="noopener noreferrer">
                            View All on Behance ↗
                    </a> 
                        
                    </div>             
                </div>
                                
            </div>
            
         </div>
        

{/*card 2*/}

         <div className="page">
            <div className="b-card">
             {/* LEFT CONTENT */}
                <div className="card-content">
                    <h2>Travel Booking Application</h2>
                    <h4>Project Overview</h4>
                    <p>
                        This project involved designing a travel booking 
                        application focused on simplicity, efficiency, and 
                        a seamless user experience. The goal was to create an 
                        intuitive platform that allows users to discover destinations, 
                        compare options, and complete bookings with ease.
                    </p>
                
                    <h4>User Experience</h4>
                    <p>The application was designed with a user-first approach, 
                        ensuring quick access to essential information such as 
                        destinations, pricing, availability, and booking details. 
                        he interface focuses on clarity and speed to make travel 
                        planning effortless.
                    </p> 
                    <div className='btn1'> 
                       <a href="https://www.behance.net/jothi07"
                        className="behance-btn" 
                            target="_blank"  rel="noopener noreferrer">
                            View All on Behance ↗
                    </a> 
                        
                    </div>             
                </div>
                {/* RIGHT IMAGE */}
                <div className="card-image">
                    <img  src="./photo/Protfolio/Frame 27.png" alt="cat"/>
                </div>
                
            </div>
         </div>



         








    </div>
  )
}

export default Pro
