import React, { Fragment } from "react";
import { connect } from "react-redux";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Alert = ({ alerts }) => {
  alerts !== null &&
    alerts.length > 0 &&
    alerts.map((alert) => toast(alert.msg, { toastId: alert.id }));
  return <Fragment></Fragment>;
};

const mapStateToProps = (state) => ({
  alerts: state.alert,
});

export default connect(mapStateToProps)(Alert);
