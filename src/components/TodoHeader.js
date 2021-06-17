import { useState } from "react";
import { Card, Button, Form, Badge } from "react-bootstrap";
import NewTaskModal from "./NewTaskModal";

export default function TodoHeader({ todos, setTodos, setSelected, selected }) {
  const [isNewModalOpen, setIsNewModalOpen] = useState(false);
  const closeModal = () => {
    setIsNewModalOpen(false);
  };
  const statusHandler = (e) => {
    setSelected(e.target.value);
  };
  return (
    <div>
      <Card.Header className="d-flex justify-content-between align-items-center bg-dark text-light" style={{height: "10vh"}}>
        <h4>Tasker</h4>
        <div className="d-flex">
          <Form.Control
            as="select"
            className="select"
            onChange={statusHandler}
            value={selected}
          >
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="uncompleted">Uncompleted</option>
          </Form.Control>
          <Button
            variant="primary"
            className="ml-2 d-flex justify-content-center align-items-center"
            onClick={() => setIsNewModalOpen(true)}
          >
            <i className="fas fa-plus"></i>
            <span className="ml-1 font-italic font-weight-light">
            <Badge pill variant="light">
              {todos.length}
            </Badge>
          </span>
          </Button>
        </div>
      </Card.Header>
      <NewTaskModal
        todos={todos}
        setTodos={setTodos}
        isModalOpen={isNewModalOpen}
        closeModal={closeModal}
      />
    </div>
  );
}
