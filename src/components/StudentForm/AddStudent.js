import React, { useState } from "react";
import Modal from "react-modal";
import { useDispatch } from "react-redux";
import { Form, Button, Col } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";
import { addStudent } from "../JS/actions/studentsActions";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const AddStudent = () => {
  const dispatch = useDispatch();
  const [modalIsOpen, setIsOpen] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [secondName, setSecondName] = useState("");
  const [photo, setPhoto] = useState("");

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const submitStudent = (e) => {
    e.preventDefault();
    let newStudent = {
      id: uuidv4(),
      name: firstName,
      username: secondName,
    };

    dispatch(addStudent(newStudent));

    closeModal();
  };

  return (
    <div>
      <button onClick={openModal}>Open Modal</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <Form>
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>First Name : </Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your first name .."
              onChange={(e) => setFirstName(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formGridAddress1">
            <Form.Label>Second Name :</Form.Label>
            <Form.Control
              placeholder="Enter yout second name .."
              onChange={(e) => setSecondName(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formGridAddress2">
            <Form.Label> Photo : </Form.Label>
            <Form.Control
              placeholder="Enter you image adress ..."
              onChange={(e) => setPhoto(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" id="formGridCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>

          <Button
            variant="primary"
            type="submit"
            onClick={(e) => submitStudent(e)}
          >
            Submit
          </Button>
        </Form>
        {/* <h1> Add Student </h1>
        <form>
          <input placeholder="Enter image adress..." />
          <input placeholder="Enter your first name ..." />
          <input placeholder="Enter your secondName ..." />

          <button>Submit</button>
        </form> */}
      </Modal>
    </div>
  );
};

export default AddStudent;
