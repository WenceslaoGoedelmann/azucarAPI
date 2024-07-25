import { Request, Response } from "express";

import { ObjectId } from "mongoose";

import Buy, { IBuy } from "../models/buy";
import { IUser } from "../models/usuario";

export const createBuy = async (
    req: Request,
    res: Response
  ): Promise<void> => {

    const usuarioId: ObjectId = req.body.usuarioConfirmado._id;
  
   
    const buyData: IBuy = req.body;
  
    const data = {
      ...buyData, 
      user: usuarioId, 
      createdAt: new Date(), 
    };
  
    const buy = new Buy(data);
  
    await buy.save();
  
  
    res.status(201).json({
      buy,
    });
  };