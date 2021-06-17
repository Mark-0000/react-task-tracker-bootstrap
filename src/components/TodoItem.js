import React, { useState } from "react";
import { Card } from "react-bootstrap";
import UpdateTaskModal from "./UpdateTaskModal";
import DeleteConfirmModal from "./DeleteConfirmModal";

export default function TodoItem({ todo, setTodos, todos }) {
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  
  const updateHandler = () => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return { ...item, completed: !item.completed };
        }
        return item;
      })
    );
  };
  const closeModal = () => {
    setIsUpdateModalOpen(false);
  };

  return (
    <div>
      <Card
        className={`mb-2 ${
          todo.priority ? "bg-light text-dark" : "bg-dark text-light"
        }`}
      >
        <Card.Body className="d-flex justify-content-between align-items-center">
          <span
            className={`${todo.completed && "completed"}`}
            style={{ maxWidth: "65%" }}
          >
            {todo.text}
          </span>
          <div>
            <span
              className={`${todo.completed ? "text-warning" : "text-success"}`}
              style={{ cursor: "pointer" }}
              onClick={updateHandler}
            >
              <i
                className={`fas ${todo.completed ? "fa-times" : "fa-check"}`}
              ></i>
            </span>
            <span
              className="text-info ml-3"
              style={{ cursor: "pointer" }}
              onClick={() => setIsUpdateModalOpen(true)}
            >
              <i className="fas fa-pen"></i>
            </span>
            <span
              className="text-danger ml-3"
              style={{ cursor: "pointer" }}
              onClick={() => setIsDeleteModalOpen(true)}
            >
              <i className="fas fa-trash"></i>
            </span>
          </div>
        </Card.Body>
        <Card.Footer
          className="text-muted"
          style={{ padding: "0 20px", fontSize: "12px" }}
        >
          {todo.dateTime}
        </Card.Footer>
      </Card>
      <UpdateTaskModal
        todos={todos}
        todo={todo}
        setTodos={setTodos}
        isModalOpen={isUpdateModalOpen}
        closeModal={closeModal}
      />
      <DeleteConfirmModal
        todos={todos}
        todo={todo}
        setTodos={setTodos}
        isModalOpen={isDeleteModalOpen}
        closeModal={() => setIsDeleteModalOpen(false)}
      />
    </div>
  );
}
