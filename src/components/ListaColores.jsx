import { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { leerColorApi } from "../helpers/queries";
import { Card, Button } from "react-bootstrap";
//import Color from "./Color";

const ListaColores = () => {
  const [colores, setColores] = useState([]);

  useEffect(() => {
    traerColor();
  }, []);

  const traerColor = async () => {
    try {
      const listaCol = await leerColorApi();
      //console.log("lista: ",listaCol)
      setColores(listaCol);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Row>
      {/*colores.map((color) => (
       // <Color key={color.id} color={color}></Color>*/}
      

      <Card style={{ width: "18rem" }}>
        <Card.Header>Color:{colores.nombreColor}</Card.Header>
        <Card.Body>
          <div className=""></div>
        </Card.Body>

        <Card.Footer>
          <Button variant="primary">Borrar</Button>
        </Card.Footer>
      </Card>
      
    </Row>
  );
};

export default ListaColores;
