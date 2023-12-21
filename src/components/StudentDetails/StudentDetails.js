import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

const StudentDetails = ({ match }) => {
  const students = useSelector((state) => state.studentsReducer.students);
  // console.log(students);

  const [student, setStudent] = useState({});

  useEffect(() => {
    setStudent(students.find((el) => el.id === +match.params.myid));
  }, []);
  return (
    <div>
      {JSON.stringify(student)}
      <h1>{student.name}</h1>
      {/* <img src={student.photo} /> */}
    </div>
  );
};

export default StudentDetails;
