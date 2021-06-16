import React from "react";
import { Card } from "react-bootstrap";
import TodoItem from "./TodoItem";

export default function TodoBody({ todos, setTodos }) {
  return (
    <div>
      <Card.Body
        style={{ overflowX: "hidden", overflowY: "scroll", maxHeight: "500px" }}
      >
        {todos.length === 0 ? (
          <h5>No Task/s To Do</h5>
        ) : (
          <div>
            {todos.map((todo) => (
              <TodoItem
                todos={todos}
                key={todo.id}
                todo={todo}
                setTodos={setTodos}
              />
            ))}
          </div>
        )}
      </Card.Body>
    </div>
  );
}
