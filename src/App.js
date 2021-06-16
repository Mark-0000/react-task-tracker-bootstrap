import { useState, useEffect } from "react";
import { Card } from "react-bootstrap";
import TodoBody from "./components/TodoBody";
import TodoHeader from "./components/TodoHeader";

function App() {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      let todoLocal = JSON.parse(localStorage.getItem("todos"));
      setTodos(todoLocal);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ minHeight: "100vh", margin: 0, padding: "10px" }}
    >
      <Card className="w-100" style={{ maxWidth: "700px" }}>
        <TodoHeader todos={todos} setTodos={setTodos} />
        <TodoBody todos={todos} setTodos={setTodos} />
      </Card>
    </div>
  );
}

export default App;
