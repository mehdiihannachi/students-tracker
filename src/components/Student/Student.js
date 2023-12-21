import React from "react";
import { Card, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";

import PropTypes from "prop-types";
import { Link, useHistory } from "react-router-dom";
import { deleteStudent } from "../JS/actions/studentsActions";
const Student = ({ student: { id, name, username }, sayHi, desc }) => {
  const dispatch = useDispatch();

  return (
    <div>
      <Card style={{ width: "18rem", margin: "40px" }}>
        {/* <Card.Img variant="top" src={photo} /> */}
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Title>{username}</Card.Title>
          <Card.Text>{desc}</Card.Text>
          <Link to={`/studentdetails/${id}`}>
            <Button variant="primary">Show more details</Button>
          </Link>
          <Button variant="primary" onClick={() => dispatch(deleteStudent(id))}>
            Delete
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Student;

Student.defaultProps = {
  desc: "No Description",
};

Student.propTypes = {
  sayHi: PropTypes.func,
};
