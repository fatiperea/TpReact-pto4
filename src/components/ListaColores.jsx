import { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import { borrarColorApi, leerColorApi } from "../helpers/queries";
import { Card, Button } from "react-bootstrap";

import Color from "./Color.jsx";
<Color className="jsx"></Color>


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
  <>
    {/*{colores.map((color) =><Card style={{ width: "18rem" }} key={color.id}>
                                      <Card.Header>Color: {color.nombreColor} id: {color.id}</Card.Header>
                                      <Card.Body><div className=""></div></Card.Body>
                                      <Card.Footer><Button variant="danger" onClick={borrarColor}>Borrar</Button>
                                      <Button variant="text-warning" onClick={editarColor}>Editar</Button>
                                      </Card.Footer>
                                  </Card>)}*/}
      {colores.map((color) => <Color key={color.id} color={color} setColores={setColores}></Color>)
          }
     
    </>
  );
};

export default ListaColores;
