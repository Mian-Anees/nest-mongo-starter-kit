import { v4 as uuidv4 } from 'uuid';
import * as mongoose from 'mongoose';
import { Document } from 'mongoose';

export const sectorSchema = new mongoose.Schema({
    id: { type: String },
    name: { type: String, required: true },
    areaId: { type: String },
});

sectorSchema.pre("save", async function (next) {
    this.id = uuidv4()
    next();
})

export interface Sector extends Document {
    id: String,
    name: String,
    areaId: String,
}