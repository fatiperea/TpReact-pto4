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
