import { useState } from "react";
import { Card, Button } from "react-bootstrap";
import NewTaskModal from "./NewTaskModal";

export default function TodoHeader({ todos, setTodos }) {
  const [isNewModalOpen, setIsNewModalOpen] = useState(false);
  const closeModal = () => {
    setIsNewModalOpen(false);
  };
  return (
    <div>
      <Card.Header className="d-flex justify-content-between">
        <h3>Tasker</h3>
        <div>
          <Button variant="primary" onClick={() => setIsNewModalOpen(true)}>
            <i className="fas fa-plus"></i>
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
