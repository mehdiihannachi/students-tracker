import React from "react";
import Student from "../Student/Student";
import { useSelector } from "react-redux";
import "./studentlist.css";

const StudentsList = ({ filterByName, sayHi }) => {
  const loading = useSelector((state) => state.studentsReducer.loading);
  const students = useSelector((state) => state.studentsReducer.students);

  return loading ? (
    <h1> Please Wait ...</h1>
  ) : (
    <div className="studentlist">
      {students
        .filter((student) =>
          student.name.toLowerCase().includes(filterByName.toLowerCase())
        )
        .map((student, i) => (
          <Student student={student} sayHi={sayHi} key={i} />
        ))}
    </div>
  );
};

export default StudentsList;
