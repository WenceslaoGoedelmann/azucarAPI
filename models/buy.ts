import { Model, Schema, Types, model } from "mongoose";

export interface IBuy {
    createdAt: Date;
    user: Types.ObjectId;
    dateBuy: string;
    category: string;
    price: string;
  }
  
  const BuySchema = new Schema<IBuy>({
    createdAt: {
      type: Date,
      default: Date.now,
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "Usuario",
      required: true,
    },
    dateBuy: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },
  });
  
  const Buy: Model<IBuy> = model<IBuy>("Buy", BuySchema);
  
  export default Buy;