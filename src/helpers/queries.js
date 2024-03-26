const URI_COLORES = import.meta.env.VITE_API_COLOR;

export const leerColorApi = async () => {
  try {
    const respuesta = await fetch(URI_COLORES);
    //console.log(respuesta)
    const listaColor = await respuesta.json();
    return listaColor;
  } catch (error) {
    console.log(error);
  }
};

export const crearColorApi = async (colorNuevo) => {
  try {
    const respuesta = await fetch(URI_COLORES, {
      method: "POST",
      headers: { "Content-Type": "aplication/json" },
      body: JSON.stringify(colorNuevo),
    });
    console.log(respuesta);
    return respuesta;
  } catch (error) {
    console.log(error);
  }
};

export const borrarColorApi = async (id) => {
  try {
    const respuesta = await fetch(`${URI_COLORES}/${id}`, {
      method: "DELETE"
    });
    console.log(respuesta);
    return respuesta;
  } catch (error) {
    console.log(error);
  }
};

export const editarColorApi = async(id, color) =>{
  try {
      const respuesta = await fetch(`${URI_COLORES}/${id}`,{
          method: "PUT",
          headers:{
              "Content-Type":"application/json"
          },
          body: JSON.stringify(color)
      })
      //console.log(respuesta);
      return respuesta;
  } catch (error) {
      console.log(error)
  }
}
