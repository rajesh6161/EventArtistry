import React, { Fragment, useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {getCurrentProfile} from '../../actions/profile'

import {Spinner} from 'react-bootstrap'
import DashboardAction from "./DashboardAction";

import Moment from 'react-moment'

const Dashboard = ({getCurrentProfile, auth: {user}, profile: {profile, loading}}) => {

  useEffect(() => {
    getCurrentProfile()
  }, [getCurrentProfile])

  return loading && profile === null ? <Spinner id="spinner" animation="grow" /> : <div className="container">
    <h1 className="mt-3" id="heading"><i className="fas fa-user" />{' '}Welcome <span className="text-primary">{user && user.firstname +' '+user.lastname}</span></h1>
{profile === null ? "" : (<small>Created On: <Moment format="DD/MM/YYYY">
                {profile.date}
            </Moment></small>)}

    {profile !== null ? (
      <DashboardAction profile={profile} user={user}/>
    ): <Fragment>
    <p>You have not setup a profile.😯 Please add some info💜</p>
    <Link
      to="/create-profile"
      className="btn btn-primary my-1"
    >
      Create Profile
    </Link>
  </Fragment>}
   
  </div>
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.profile
})

export default connect(mapStateToProps, {getCurrentProfile})(Dashboard);
