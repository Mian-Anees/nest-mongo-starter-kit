import { v4 as uuidv4 } from 'uuid';
import * as mongoose from 'mongoose';
import { Document } from 'mongoose';
import * as bcrypt from 'bcrypt';

export const bookingSchema = new mongoose.Schema({
    id: { type: String },
    bookingTag: { type: String, required: true },
    productType: { type: String },
    prepaidDelivery: { type: String, required: true },
    insurance: { type: String, required: true },
    serviceType: { type: String },
    weight: { type: String },
    peices: { type: String },
    productDiscription: { type: String },
    paymentMethod: { type: String },
    amount: { type: String },
    bookingStatus: { type: String },
    createdAt: { type: String },
    updatedAt: { type: String }
});

bookingSchema.pre("save", async function (next) {
    this.id = uuidv4()
    next();
})

export interface Booking extends Document {
    id: String,
    bookingTag: String,
    productType: String,
    prepaidDelivery: String,
    insurance: String,
    serviceType: String,
    weight: String,
    peices: String,
    productDiscription: String
    paymentMethod: String
    amount: String,
    bookingStatus: String,
    createdAt: String,
    updatedAt: String

}