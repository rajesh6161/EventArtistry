import React, {Fragment} from 'react'
import { Link } from "react-router-dom";
import {Navbar, Nav, Button} from 'react-bootstrap';
import { logout } from "../../actions/auth";
import { connect } from "react-redux";

const Navb = ({ auth: { isAuthenticated, loading }, logout }) => {
    

    
    
    return (
        <div>
            
            <Navbar id="black" collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Link to="/"><Navbar.Brand>
                <h2 id="cursive" className="animate_link nav-brand">EventArtistry</h2>
                </Navbar.Brand></Link>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
 
        {!loading && (<Fragment>
            <Nav className="mr-auto">
      <Nav.Link><Link to="/profiles" className="link_nav">View Profiles</Link></Nav.Link>
      
      <Nav.Link className="link_nav">About Us</Nav.Link>
      
      
    </Nav>
    <Nav>
        <Nav.Link>{isAuthenticated ? <div style={{display: 'flex'}}>
            <Link className=" link_nav animate_link" style={{paddingRight: "10px"}} to="/dashboard">Dashboard</Link>
            <a className="link_nav" onClick={logout}href="!#"><i className="fas fa-sign-out-alt"></i>{" "}
        <span>Logout</span></a></div>:<div style={{display: 'flex'}}><Button variant="light"><Link style={{color: "black"}} to="/login">Login</Link></Button>{' '}<Button variant="outline" className="animate_link reg" ><Link to="/register"  className="link_nav">Register</Link></Button></div>}</Nav.Link>
      
    </Nav>
        </Fragment>)}
 
  </Navbar.Collapse>
</Navbar>
        </div>
    )
}

const mapStateToProps = (state) => ({
    auth: state.auth,
  });

export default connect(mapStateToProps, { logout })(Navb)
