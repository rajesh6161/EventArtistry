import React, { Fragment, useEffect } from "react";
import { connect } from "react-redux";

import { getProfiles } from "../../actions/profile";
import ProfileItem from "./ProfileItem";
import {Spinner} from 'react-bootstrap'

const Profiles = ({ profile: { profiles, loading }, getProfiles }) => {
  useEffect(() => {
    getProfiles();
  }, []);

  return (
    <div className="container mt-3">
      {loading ? (
        <h5>Loading...</h5>
      ) : (
        <Fragment>
          <h1 id="avprofile" className="large text-secondary">
            Available <i className="fab fa-connectdevelop text-primary" />{" "}
            Profiles
          </h1>

          <div className="row">
            {profiles.length > 0 ? (
              profiles.map((profile) => (
                <ProfileItem key={profile._id} profile={profile} />
              ))
            ) : (
              <Spinner animation="grow" style={{marginLeft: 10}}/>
            )}
          </div>
        </Fragment>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  profile: state.profile,
});

export default connect(mapStateToProps, { getProfiles })(Profiles);
