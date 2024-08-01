import {modelo} from '../models/productos.model.js'

export const testProducto = () => {
    console.log("Llamando la funcion desde el controlador");
  };
modelo.create({
    name: "Papel"
})
