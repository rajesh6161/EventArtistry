import axios from "axios";
import { setAlert } from "./alert";

import {
  ACCOUNT_DELETED,
  GET_PROFILE,
  PROFILE_ERROR,
  UPDATE_PROFILE,
  CLEAR_PROFILE,
  GET_PROFILES,
} from "./types";

// Get current user's profile
export const getCurrentProfile = () =>
  async (dispatch) => {
    try {
      const res = await axios.get("/api/profile/me");

      dispatch({
        type: GET_PROFILE,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: PROFILE_ERROR,
        payload: { msg: err.response.statusText, status: err.response.status },
      });
    }
  };

// Get all profiles
export const getProfiles = () =>
  async (dispatch) => {
    dispatch({ type: CLEAR_PROFILE });
    try {
      const res = await axios.get("/api/profile");

      dispatch({
        type: GET_PROFILES,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: PROFILE_ERROR,
        payload: { msg: err.response.statusText, status: err.response.status },
      });
    }
  };

// Get profile by id
export const getProfileById = (userID) =>
  async (dispatch) => {
    try {
      const res = await axios.get(`/api/profile/user/${userID}`);

      dispatch({
        type: GET_PROFILE,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: PROFILE_ERROR,
        payload: { msg: err.response.statusText, status: err.response.status },
      });
    }
  };

// Create or update profile
export const createProfile = (formData, history, edit = false) =>
  async (
    dispatch,
  ) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const res = await axios.post("/api/profile", formData, config);

      dispatch({
        type: GET_PROFILE,
        payload: res.data,
      });

      dispatch(
        setAlert(edit ? "Profile Updated" : "Profile Created", "success"),
      );

      history.push("/dashboard");
    } catch (err) {
      const errors = err.response.data.errors;

      if (errors) {
        errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
      }
      dispatch({
        type: PROFILE_ERROR,
        payload: { msg: err.response.statusText, status: err.response.status },
      });
    }
  };


export const addAvatar = (formData, history) => async (dispatch) => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json"
      }
    }
    const res = await axios.put("/api/profile/profilephoto", formData, config);
    dispatch({
      type: UPDATE_PROFILE,
      payload: res.data,
    });

    dispatch(setAlert("Avatar Added", "success"));

    history.push("/dashboard");
  } catch (err) {
    const errors = err.response.data.errors;

      if (errors) {
        errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
      }
      dispatch({
        type: PROFILE_ERROR,
        payload: { msg: err.response.statusText, status: err.response.status },
      });
  }
}


// Delete account and profile
export const deleteAccount = () =>
  async (dispatch) => {
    if (window.confirm("Are you sure? This can NOT be undone!")) {
      try {
        await axios.delete("/api/profile/");

        dispatch({
          type: CLEAR_PROFILE,
        });
        dispatch({
          type: ACCOUNT_DELETED,
        });
        dispatch(
          setAlert("Your account has been permanently deleted", "danger"),
        );
      } catch (err) {
        dispatch({
          type: PROFILE_ERROR,
          payload: {
            msg: err.response.statusText,
            status: err.response.status,
          },
        });
      }
    }
  };
