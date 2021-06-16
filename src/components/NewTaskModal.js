import React, { useRef } from "react";
import { Modal, Form, Button } from "react-bootstrap";
import uuid from "react-uuid";

export default function NewTaskModal({
  closeModal,
  todos,
  setTodos,
  isModalOpen,
}) {
  const newTaskRef = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    setTodos([
      ...todos,
      { id: uuid(), text: newTaskRef.current.value, completed: false },
    ]);
    closeModal();
  };
  return (
    <div>
      <Modal show={isModalOpen} onHide={closeModal}>
        <Modal.Header closeButton>
          <h4>New Task</h4>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Label>Task Name</Form.Label>
              <Form.Control
                placeholder="Enter New Task"
                ref={newTaskRef}
              ></Form.Control>
            </Form.Group>
            <Button className="btn-block" type="submit">
              Create
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
}
