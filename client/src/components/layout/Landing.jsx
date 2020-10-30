import React from "react";
import {Jumbotron, Button} from 'react-bootstrap'
import ServicePage from './services/ServicePage'

const Landing = () => {
  return (
    <div className="landing">
      <Jumbotron className="flex_center">
        <div className="_flex_inner">
        <h1 className="display-1 text-light text-bolder">Event Management Made Easy</h1>
        <h4 className="tag">We specialize in experiential events that elevate brands into
              popular culture and shareworthy immersive moments. </h4>
        </div>
      </Jumbotron>
      <ServicePage />
    </div>
  );
};

export default Landing;
