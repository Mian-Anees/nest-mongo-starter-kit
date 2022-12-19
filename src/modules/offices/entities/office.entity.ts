import { v4 as uuidv4 } from 'uuid';
import * as mongoose from 'mongoose';
import { Document } from 'mongoose';

export const officeSchema = new mongoose.Schema({
    id: { type: String },
    name: { type: String, required: true },
    type: { type: String },
    companyId: { type: String },
    addressId: { type: String },
    coverageSectors: { type: [String] },

});

officeSchema.pre("save", async function (next) {
    this.id = uuidv4()
    next();
})

export interface Office extends Document {
    id: String,
    name: String,
    type: String,
    companyId: String,
    addressId: String,
    coverageSectors: [String],

}