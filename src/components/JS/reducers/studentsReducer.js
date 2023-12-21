import { data } from "../../../data";
import {
  ADD_STUDENT,
  DELETE_STUDENT,
  GET_USERS,
  GET_USERS_FAILED,
  GET_USERS_SUCCESS,
} from "../actionsTypes/types";

const initialState = {
  students: [],
  loading: false,
  errors: null,
};

const studentsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_STUDENT:
      return {
        ...state,
        students: [...state.students, payload],
      };

    case DELETE_STUDENT:
      return {
        ...state,
        students: state.students.filter((student) => student.id !== payload),
      };

    case GET_USERS:
      return {
        ...state,
        loading: true,
      };

    case GET_USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        students: payload,
      };

    case GET_USERS_FAILED:
      return {
        ...state,
        loading: false,
        errors: payload,
      };

    default:
      return state;
  }
};

export default studentsReducer;
