import React from 'react'
import logo from './logo.png'

const Footer = () => {
    return (
        <div className="footer">
           <div className="footer_container">
                  <div className="footer_logo">
                      <img src={logo} alt="Logo"/>
                  </div>
                  <div className="footer_tag">
                    <p>&copy; 2020 EVENTS ARTISTRY</p> 
                  </div>
            </div> 
        </div>
    )
}

export default Footer
