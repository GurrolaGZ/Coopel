import mongoose from "mongoose";
import express from "express";
import cors from "cors";
import dontenv from "dotenv";
import  {testEmpleados}  from "./backend/controllers/empleados.controller.js";
import  { testProducto }  from "./backend/controllers/productos.controller.js";
import  { testPromocion }  from "./backend/controllers/promociones.controller.js";
import  { testGerentes }  from "./backend/controllers/gerentes.controller.js";
import  { testClientes }  from "./backend/controllers/clientes.controller.js";
dontenv.config();


mongoose.connect(process.env.url_bd)
.then(() => {
    console.log('jalo')
})
.catch((err) => {
    console.log('no jalo', err)
})

const app=express();
app.use(cors())

app.listen(4000, () => {
    console.log('Esta funcionando correctamente tu servidor local')
})


testEmpleados()
testProducto()
testClientes()
testGerentes()
testPromocion()