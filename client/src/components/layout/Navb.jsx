import React, {Fragment} from 'react'
import { Link } from "react-router-dom";
import {Navbar, Nav, Button} from 'react-bootstrap';
import { logout } from "../../actions/auth";
import { connect } from "react-redux";

const Navb = ({ auth: { isAuthenticated, loading }, logout }) => {
    

    
    
    return (
        <div>
            
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Link to="/"><Navbar.Brand>
                <h2>EventArtistry</h2>
                </Navbar.Brand></Link>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
 
        {!loading && (<Fragment>
            <Nav className="mr-auto">
      <Nav.Link><Link to="/profiles">View Profiles</Link></Nav.Link>
      <Nav.Link>Services</Nav.Link>
      <Nav.Link>About Us</Nav.Link>
      
      
    </Nav>
    <Nav>
        <Nav.Link>{isAuthenticated ? <div style={{display: 'flex'}}>
            <Link style={{paddingRight: "10px"}} to="/dashboard">Dashboard</Link>
            <a onClick={logout}href="!#"><i className="fas fa-sign-out-alt"></i>{" "}
        <span>Logout</span></a></div>:<div style={{display: 'flex'}}><Button variant="light"><Link to="/login">Login</Link></Button>{' '}<Button variant="outline"><Link to="/register">Register</Link></Button></div>}</Nav.Link>
      
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
