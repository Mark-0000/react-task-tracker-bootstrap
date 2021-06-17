import { useState, useEffect } from "react";
import { Card } from "react-bootstrap";
import TodoBody from "./components/TodoBody";
import TodoFooter from "./components/TodoFooter";
import TodoHeader from "./components/TodoHeader";

function App() {
  const [todos, setTodos] = useState([]);
  const [selected, setSelected] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);
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
    switch (selected) {
      case "completed":
        setFilteredTodos(todos.filter((item) => item.completed === true).sort((x, y) => !x.priority - !y.priority));
        break;
      case "uncompleted":
        setFilteredTodos(todos.filter((item) => item.completed === false).sort((x, y) => !x.priority - !y.priority));

        break;
      default:
        setFilteredTodos(todos.sort((x, y) => !x.priority - !y.priority));
        break;
    }
  }, [todos, selected]);

  return (
    <div
      className="d-flex justify-content-center"
    >
      <Card className="w-100" style={{ maxHeight: "100vh", maxWidth: "700px", border: "none" }}>
        <TodoHeader
          todos={todos}
          setTodos={setTodos}
          setSelected={setSelected}
          selected={selected}
        />
        <TodoBody
          selected={selected}
          filteredTodos={filteredTodos}
          todos={todos}
          setTodos={setTodos}
        />
        <TodoFooter />
      </Card>
    </div>
  );
}

export default App;
