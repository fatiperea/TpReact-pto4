import { Button, Form } from "react-bootstrap";
import ListaColores from "./ListaColores";
import Color from "./Color";

const Formulario = () => {
  return (
    <section>
      <Form>
        <Form.Group className="mb-3" controlId="color">
          <Form.Label>Ingresar color:</Form.Label>
          <Form.Control type="text" placeholder="Color" />
        </Form.Group>

        <Button variant="primary" type="submit" className="mb-5">
          Guardar
        </Button>
      </Form>
    </section>
  );
};

export default Formulario;
