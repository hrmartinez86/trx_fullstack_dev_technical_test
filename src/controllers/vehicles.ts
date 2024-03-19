import  { Request,Response } from "express";
import {Vehicle} from "../models/vehicles";
export const saveVehicle=async(req: Request,res: Response)=>{
    const body=req.body;
    try {
        const newVehicle=await Vehicle.create(body);
        res.status(201).json({
            status:'success',
            data:{
                vehicle:newVehicle
            }
        })
    } catch (error:any) {
        console.log(error.message);
        res.status(401).json({mensaje:error.message})
    }
}