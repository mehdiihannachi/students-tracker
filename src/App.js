import "./App.css";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import NavBar from "./components/NavBar/NavBar";
import StudentsList from "./components/StudentsList/StudentsList";
import StudentDetails from "./components/StudentDetails/StudentDetails";
import { Route } from "react-router-dom";
import { getUsers } from "./components/JS/actions/studentsActions";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
  }, []);

  // const students = useSelector((state) => state.studentsReducer.students);
  const [filterByName, setFilterByName] = useState("");

  return (
    <div>
      <NavBar setFilterByName={setFilterByName} />

      <Route
        exact
        path="/"
        component={() => <StudentsList filterByName={filterByName} />}
      />

      <Route
        exact
        path="/studentdetails/:myid"
        component={(defaultProps) => <StudentDetails {...defaultProps} />}
      />
    </div>
  );
};

export default App;
