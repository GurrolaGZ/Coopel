import {modelo} from '../models/promociones.model.js'

export const testPromocion = () => {
    console.log("Llamando la funcion desde el controlador")
}
modelo.create({
    price: 50.00
})
