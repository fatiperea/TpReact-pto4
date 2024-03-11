import "bootstrap/dist/css/bootstrap.min.css";
import Formulario from "./components/Formulario";
import { Container } from "react-bootstrap";

function App() {
  return (
    <>
      <h1 className="text-center">Administrar colores</h1>
      <Container className="container-fluid">
        <Formulario></Formulario>
      </Container>
    </>
  );
}

export default App;
