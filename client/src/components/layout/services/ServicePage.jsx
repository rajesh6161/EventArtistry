import React from 'react'
import {CardDeck, Card, Row, Col} from 'react-bootstrap'
import './service.css'

const ServicePage = () => {
    return (
        <div className="container" id="services">
            <h1 className="text-center mb-3">Our Services</h1>
            <hr className="style18"></hr>
            <div className="row box-container">
                <div className="col-md-6 icon-box-1">
                    <div className="icon animate_link">
                        <h3><i class="fas fa-folder"></i></h3>
                    </div>  
                    <div className="service_name">
                        <h3>Project Management and Administration</h3>
                    </div>
                </div>
                <div className="col-md-6 icon-box-1">
                    <div className="icon animate_link">
                        <h3><i class="fas fa-users"></i></h3>
                    </div>  
                    <div className="service_name">
                        <h3>Corporate &amp; Executive Meetings</h3>
                    </div>
                </div>
                <div className="col-md-6 icon-box-1">
                    <div className="icon animate_link">
                        <h3><i class="fas fa-rocket"></i></h3>
                    </div>  
                    <div className="service_name">
                        <h3>Product Launch</h3>
                    </div>
                </div>
                <div className="col-md-6 icon-box-1">
                    <div className="icon animate_link">
                        <h3><i class="fas fa-handshake"></i></h3>
                    </div>  
                    <div className="service_name">
                        <h3>Non-Profit Event Planning</h3>
                    </div>
                </div>
                <div className="col-md-6 icon-box-1">
                    <div className="icon animate_link">
                        <h3><i class="fas fa-briefcase"></i></h3>
                    </div>  
                    <div className="service_name">
                        <h3>Trade-Show Sales and Management</h3>
                    </div>
                </div>
                <div className="col-md-6 icon-box-1">
                    <div className="icon animate_link">
                        <h3><i class="fas fa-hand-holding-heart"></i></h3>
                    </div>  
                    <div className="service_name">
                        <h3>Wedding Planning</h3>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default ServicePage
