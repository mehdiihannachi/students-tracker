import {
  ADD_STUDENT,
  DELETE_STUDENT,
  GET_USERS,
  GET_USERS_FAILED,
  GET_USERS_SUCCESS,
} from "../actionsTypes/types";
import axios from "axios";

export const addStudent = (payload) => {
  return { type: ADD_STUDENT, payload };
};

export const deleteStudent = (payload) => {
  return { type: DELETE_STUDENT, payload };
};

export const getUsers = () => async (dispatch) => {
  dispatch({ type: GET_USERS });

  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    console.log(response);
    dispatch({ type: GET_USERS_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: GET_USERS_FAILED, payload: error });
  }
};
