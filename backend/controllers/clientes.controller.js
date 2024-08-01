import {modelo} from '../models/clientes.model.js'

export const testClientes = () => {
    console.log("Llamando la funcion desde el controlador")
}
modelo.create({
    name: "Roman"
})
