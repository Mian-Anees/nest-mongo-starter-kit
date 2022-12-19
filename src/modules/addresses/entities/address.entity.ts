import { v4 as uuidv4 } from 'uuid';
import * as mongoose from 'mongoose';
import { Document } from 'mongoose';

export const addressSchema = new mongoose.Schema({
    id: { type: String },
    city: { type: String, required: true },
    province: { type: String },
    country: { type: String, required: true },
    addressline: { type: String, required: true },
});

addressSchema.pre("save", async function (next) {
    this.id = uuidv4()
    next();
})

export interface Address extends Document {
    id: String,
    city: String,
    provience: String,
    country: String,
    addressline: String,
}