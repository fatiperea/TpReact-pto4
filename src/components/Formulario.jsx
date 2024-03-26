import { Button, Form, FormText } from "react-bootstrap";
import ListaColores from "./ListaColores";
import { useForm } from "react-hook-form";
import { crearColorApi } from "../helpers/queries";

//import Color from "./Color";

const Formulario = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();

  const validacion = async(color) => {
    console.log(color);
    const respuesta=await crearColorApi(color);
    if(respuesta.status===201){
      console.log("Color creado")
      reset();
    }else{console.log("error")}
    
  };

  return (
    <section>
      <Form onSubmit={handleSubmit(validacion)}>
        <Form.Group className="mb-3" controlId="color">
          <Form.Label>Ingresar color:</Form.Label>
          <Form.Control
            type="text"
            placeholder="Color"
            {...register("nombreColor", {
              required: "Campo obligatorio",
              minLength: { value: 4, message: "4 caracteres minimo" },
              maxLength: { value: 10, message: "10 caracteres maximo" },
            })}
          />
          <FormText className="text-danger">
            {errors.nombreColor?.message}
          </FormText>
        </Form.Group>

        <Button variant="primary" type="submit" className="mb-5">
          Guardar
        </Button>
      </Form>
    </section>
  );
};

export default Formulario;
