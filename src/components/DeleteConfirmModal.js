import React from "react";
import { Modal, Button } from "react-bootstrap";

export default function DeleteConfirmModal({
  closeModal,
  isModalOpen,
  todo,
  todos,
  setTodos,
}) {
  const deleteHandler = () => {
    setTodos(todos.filter((item) => item.id !== todo.id));
    closeModal();
  };
  return (
    <div>
      <Modal show={isModalOpen} onHide={closeModal}>
        <Modal.Header className="bg-dark text-light">
          <h4>Are you sure you want to delete ?</h4>
        </Modal.Header>
        <Modal.Body>
          <p>{todo.text}</p>
          <div>
            <Button variant="secondary" onClick={closeModal}>
              Close
            </Button>
            <Button variant="danger" onClick={deleteHandler} className="ml-2">
              Delete
            </Button>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}
