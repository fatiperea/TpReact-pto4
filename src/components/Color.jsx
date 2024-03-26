import "../App.css";
import { Card, Button } from "react-bootstrap";
import { borrarColorApi, leerColorApi } from "../helpers/queries";

const Color = ({ color, setColores }) => {

  const borrarColor = async () => {
    console.log("quiero borrar: ", color.id);
    const respuesta = await borrarColorApi(color.id);
    console.log("borrar: ", respuesta);
    if (respuesta.status === 201) {
      console.log("Color eliminado");

      const listaActual = await leerColorApi();
      setColores(listaActual);
    } else {
      console.log("error");
    }
  };
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Header>Color: {color.nombreColor}</Card.Header>
      <Card.Body>
        <div className=""></div>
      </Card.Body>

      <Card.Footer>
        <Button variant="primary"onClick={borrarColor}>
          Borrar
        </Button>
        <Button variant="primary"onClick={borrarColor}>Editar</Button>
      </Card.Footer>
    </Card>
  );
};

export default Color;
