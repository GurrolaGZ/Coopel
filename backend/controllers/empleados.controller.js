import {modelo} from '../models/empleados.model.js'

export const testEmpleados = () => {
    console.log("Llamando la funcion desde el controlador")
}
modelo.create({
    name: "Pancho"
})
