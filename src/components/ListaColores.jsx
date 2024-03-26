import { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import { leerColorApi } from "../helpers/queries";
import { Card, Button } from "react-bootstrap";
//import Color from "./Color";
//<Color className="jsx"></Color>


const ListaColores = () => {
  const [colores, setColores] = useState([]);

  useEffect(() => {
    traerColor();
  }, []);

  const borrarColor = async (id) => {
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


  const traerColor = async () => {
    try {
      const listaCol = await leerColorApi();
      //console.log("lista: ",listaCol)
      setColores(listaCol);
    } catch (error) {
      console.log(error);
    }
  };

  

  {/* <Card style={{ width: "18rem" }} key={color.id}>
                                      <Card.Header>Color: {color.nombreColor}</Card.Header>
                                      <Card.Body><div className=""></div></Card.Body>
                                      <Card.Footer><Button variant="primary" onClick={borrarColor}>Borrar</Button></Card.Footer>
                                  </Card>*/}

  return (
  <Row>
    {colores.map((color) =><Card style={{ width: "18rem" }} key={color.id}>
                                      <Card.Header>Color: {color.nombreColor}</Card.Header>
                                      <Card.Body><div className=""></div></Card.Body>
                                      <Card.Footer><Button variant="text-danger" onClick={borrarColor}>Borrar</Button>
                                      {/*<Button variant="text-warning" onClick={editarColor}>Editar</Button>*/}
                                      </Card.Footer>
                                  </Card>)}
      {/*{colores.map((color) => <Color key={color.id} propsColor={color} setColores={setColores}></Color>)
          }*/}
     
    </Row>
  );
};

export default ListaColores;
