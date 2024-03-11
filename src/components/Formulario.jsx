import { Button, Form } from "react-bootstrap";

const Formulario = () => {
  return (
    <section>
      
      <Form>
        <Form.Group className="mb-3" controlId="color">
          <Form.Label>Ingresar color:</Form.Label>
          <Form.Control type="text" placeholder="Color" />
        </Form.Group>
        
        <Button variant="primary" type="submit">
          Guardar
        </Button>
      </Form>
    </section>
  );
};

export default Formulario;
