import axios from "axios";
import { useEffect, useReducer } from "react";

const initState = {
  CoursesData: [],
  Courses: [],
  Error: "",
  IsLoading: false,
};

const reducerCourses = (oldState, action) => {
  switch (action.type) {
    case "SEND_REQUEST":
      return { ...oldState, IsLoading: true, Error: "" };
    case "REQUEST_SUCCESS":
      return {
        ...oldState,
        CoursesData: action.payload,
        Courses: action.Courses,
        IsLoading: false,
        Error: "",
      };
    case "REQUEST_FAILURE":
      return {
        CoursesData: "",
        Courses: [],
        IsLoading: false,
        Error: action.payload,
      };
    default:
      return oldState;
  }
};

const useEffectApi = () => {
  const [state, dispatch] = useReducer(reducerCourses, initState);
  useEffect(() => {
    let Courses = [];
    dispatch({ type: "SEND_REQUEST" });
    axios
      .get(`http://localhost:3001/tabs`)
      .then((json) => {
        json.data.forEach((tab, index) => {
          Courses = [...Courses, ...tab.courses];
          dispatch({ type: "REQUEST_SUCCESS" });
        });
        dispatch({ type: "REQUEST_SUCCESS", payload: json.data, Courses });
      })
      .catch((error) => {
        dispatch({ type: "REQUEST_FAILURE", payload: error });
      });
  }, []);
  return state;
};

export { useEffectApi, reducerCourses, initState };
