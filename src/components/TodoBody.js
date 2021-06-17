import React from "react";
import { Card } from "react-bootstrap";
import TodoItem from "./TodoItem";

export default function TodoBody({ selected, todos, filteredTodos, setTodos }) {
  return (
    <div>
      <Card.Body className="bg-secondary"
        style={{ overflowX: "hidden", overflowY: "scroll", height: "83vh" }}
      >
        {filteredTodos.length === 0 ? (
          <h6 className="text-light">{`${
            selected === "all"
              ? "No Task/s To Do"
              : selected === "completed"
              ? "No Completed Task/s"
              : "No Uncompleted Task/s"
          }`}</h6>
        ) : (
          <div>
            {filteredTodos.map((todo) => (
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
