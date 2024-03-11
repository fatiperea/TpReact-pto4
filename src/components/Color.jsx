import '../App.css'
import { Card, Button } from "react-bootstrap";

const Color = () => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Header>Color</Card.Header>
      <Card.Body className="color"></Card.Body>
        
      <Card.Footer>
        <Button variant="primary">Borrar</Button>
      </Card.Footer>
    </Card>
  );
};

export default Color;
