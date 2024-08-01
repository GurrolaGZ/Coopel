import {modelo} from '../models/gerentes.model.js'

export const testGerentes = () => {
    console.log("Llamando la funcion desde el controlador")
}
modelo.create({
    name: "Josue"
})
