import '../App.css'
import { Card, Button } from "react-bootstrap";

const Color = () => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Header>Color</Card.Header>
      <Card.Body >
        <div className="color"></div>
      </Card.Body>
        
      <Card.Footer>
        <Button variant="primary">Borrar</Button>
      </Card.Footer>
    </Card>
  );
};

export default Color;
