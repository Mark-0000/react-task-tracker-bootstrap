import React, { useRef, useState } from "react";
import { Modal, Form, Button } from "react-bootstrap";

export default function NewTaskModal({
  closeModal,
  todos,
  setTodos,
  isModalOpen,
  todo,
}) {
  const checkBoxRef = useRef();
  const [updateTaskInput, setUpdateTaskInput] = useState(todo.text);
  const priorityCheckBoxRef = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    const checkboxValue = checkBoxRef.current.checked;
    const priorityCheckboxValue = priorityCheckBoxRef.current.checked;
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return {
            ...item,
            completed: checkboxValue,
            text: updateTaskInput,
            priority: priorityCheckboxValue,
          };
        }
        return item;
      })
    );
    closeModal();
  };
  return (
    <div>
      <Modal show={isModalOpen} onHide={closeModal}>
        <Modal.Header className="bg-dark text-light">
          <h4>Update Task</h4>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Label>Task Name</Form.Label>
              <Form.Control
                placeholder={todo.text}
                value={updateTaskInput}
                onChange={(e) => setUpdateTaskInput(e.target.value)}
                required
              ></Form.Control>
            </Form.Group>
            <div className="d-flex mb-3">
              <Form.Group>
                <Form.Check
                  type="checkbox"
                  label="Priority"
                  ref={priorityCheckBoxRef}
                  defaultChecked={todo.priority}
                />
              </Form.Group>
              <Form.Group className="ml-3">
                <Form.Check
                  type="checkbox"
                  label="Completed"
                  ref={checkBoxRef}
                  defaultChecked={todo.completed}
                />
              </Form.Group>
            </div>

            <div>
              <Button variant="secondary" onClick={closeModal}>
                Close
              </Button>
              <Button
                variant="info"
                type="submit"
                className="ml-2"
                disabled={updateTaskInput ? false : true}
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
