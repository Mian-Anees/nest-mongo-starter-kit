import { v4 as uuidv4 } from 'uuid';
import * as mongoose from 'mongoose';
import { Document } from 'mongoose';
import * as bcrypt from 'bcrypt';

export const companySchema = new mongoose.Schema({
  id: { type: String },
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },

});

companySchema.pre("save", async function (next) {
  this.id = uuidv4()
  this.password = await bcrypt.hash(this.password, 10);
  next();
})

export interface Companies extends Document {
  id: string,
  name: string,
  email: string
  password: string
}
