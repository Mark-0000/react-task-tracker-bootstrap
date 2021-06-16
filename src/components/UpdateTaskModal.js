import React, { useRef } from "react";
import { Modal, Form, Button } from "react-bootstrap";

export default function NewTaskModal({
  closeModal,
  todos,
  setTodos,
  isModalOpen,
  todo,
}) {
  const newTaskRef = useRef();
  const checkBoxRef = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    const textValue = newTaskRef.current.value;
    const checkboxValue = checkBoxRef.current.checked;
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return { ...item, completed: checkboxValue, text: textValue };
        }
        return item;
      })
    );
    closeModal();
  };
  return (
    <div>
      <Modal show={isModalOpen} onHide={closeModal}>
        <Modal.Header closeButton>
          <h4>Update Task</h4>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Label>Task Name</Form.Label>
              <Form.Control
                placeholder="Enter New Task"
                ref={newTaskRef}
                defaultValue={todo.text}
              ></Form.Control>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Check
                type="checkbox"
                label="Completed"
                ref={checkBoxRef}
                defaultChecked={todo.completed}
              />
            </Form.Group>
            <Button className="btn-block" type="submit">
              Update
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
}
