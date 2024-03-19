import mongoose, { model } from "mongoose";

const vehicleSchema= new mongoose.Schema({
    placa: {type:String,required:[true,'La placa es requerida!!!']},
    vim: {type:String,required:[true,'El VIM es requerido!!!']},
    numero_economico: {type:String,required:[true,'El número economico es requerido!!!']},
    asientos: Number,
    seguro: String,
    segure_number: String,
    BRAND: String,
    MODEL: String,
    YEAR: Number,
    COLOR: String
})
export const Vehicle=mongoose.model('Vehicle',vehicleSchema);

