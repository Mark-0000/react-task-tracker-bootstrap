import React, { useRef, useState } from "react";
import { Modal, Form, Button } from "react-bootstrap";
import uuid from "react-uuid";
const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const monthsOfYear = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

export default function NewTaskModal({
  closeModal,
  todos,
  setTodos,
  isModalOpen,
}) {
  const [newTaskInput, setNewTaskInput] = useState("");
  const checkBoxRef = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    const checkboxValue = checkBoxRef.current.checked;
    setTodos([
      ...todos,
      {
        id: uuid(),
        text: newTaskInput,
        completed: false,
        priority: checkboxValue,
        dateTime: getCurrentDate(),
      },
    ]);
    setNewTaskInput("");
    closeModal();
  };
  return (
    <div>
      <Modal show={isModalOpen} onHide={closeModal}>
        <Modal.Header className="bg-dark text-light">
          <h4>New Task</h4>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Label>Task Name</Form.Label>
              <Form.Control
                placeholder="Enter New Task"
                value={newTaskInput}
                onChange={(e) => setNewTaskInput(e.target.value)}
              ></Form.Control>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Check type="checkbox" label="Priority" ref={checkBoxRef} />
            </Form.Group>
            <div>
              <Button variant="secondary" onClick={closeModal}>
                Close
              </Button>
              <Button
                variant="primary"
                type="submit"
                className="ml-2"
                disabled={newTaskInput ? false : true}
              >
                Save changes
              </Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
}
const getCurrentDate = () => {
  let today = new Date();
  let day = today.getDay();
  let date = `${
    today.getDate() < 10 ? "0" + today.getDate() : today.getDate()
  }`;
  let month = today.getMonth();
  let year = today.getFullYear();
  let minute = `${
    today.getMinutes() < 10 ? "0" + today.getMinutes() : today.getMinutes()
  }`;
  let hour = `${
    today.getHours() < 10 ? "0" + today.getHours() : today.getHours()
  }`;
  return `${daysOfWeek[day]}, ${monthsOfYear[month]} ${date} ${year}  ${hour}:${minute}`;
};
