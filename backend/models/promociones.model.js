import { Schema, model } from 'mongoose'

const esquema = new Schema ({
    Precio:{
     type:String
    }
 })
 

 export const modelo = new model('Promocion', esquema)