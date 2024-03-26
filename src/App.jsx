import "bootstrap/dist/css/bootstrap.min.css";
import Formulario from "./components/Formulario";
import { Container } from "react-bootstrap";
import ListaColores from "./components/ListaColores";
import Color from "./components/Color";

function App() {
  //<Color></Color>
  return (
    <>
      <h1 className="text-center">Administrar colores</h1>
      <Container className="container-fluid">
        <Formulario></Formulario>
        <ListaColores>
          
        </ListaColores>
        
      </Container>
    </>
  );
}

export default App;
