export class Area { }
import { v4 as uuidv4 } from 'uuid';
import * as mongoose from 'mongoose';
import { Document } from 'mongoose';

export const areaSchema = new mongoose.Schema({
    id: { type: String },
    name: { type: String, required: true },
    city: { type: String },
});

areaSchema.pre("save", async function (next) {
    this.id = uuidv4()
    next();
})

export interface Area extends Document {
    id: String,
    name: String,
    city: String,
}