import React, {useState, Fragment} from "react";
import { Link } from "react-router-dom";
import { logout } from "../../actions/auth";
import { connect } from "react-redux";




const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {
 
  

  const authLinks = (
    <ul>
      <li>
        <Link to="/profiles">
          View Profiles
        </Link>
      </li>

      <li>
        <a onClick={logout} href="#!">
          <i className="fas fa-sign-out-alt"></i>{" "}
          <span>Logout</span>
        </a>
      </li>
    </ul>
  );

  const guestLinks = (
    <ul>
      <li>
        <Link to="/profiles">
          View Profiles
        </Link>
      </li>
      <li >
        <Link  to="/register">
          Register
        </Link>
      </li>
      <li>
        <Link to="/login">
          Login
        </Link>
      </li>
    </ul>
  );

  return (
    <Fragment>
      <nav>
 
        <Link to="/" className="brand-logo">
          EventArtistry
        </Link>

      <div>
        {!loading && (
          <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
        )}
      </div>
      </nav>
   
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logout })(Navbar);
