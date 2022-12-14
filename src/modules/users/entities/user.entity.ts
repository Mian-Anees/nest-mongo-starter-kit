import { v4 as uuidv4 } from 'uuid';
import * as mongoose from 'mongoose';
import { Document } from 'mongoose';
import * as bcrypt from 'bcrypt';

export const userSchema = new mongoose.Schema({
  id: { type: String },
  name: { type: String, required: true },
  role: { type: String },
  email: { type: String, required: true },
  password: { type: String, required: true },
  companyRef: { type: String },
  addressRef: { type: String },
});

userSchema.pre("save", async function (next) {
  this.id = uuidv4()
  this.password = await bcrypt.hash(this.password, 10);
  next();
})

export interface Users extends Document {
  id: string,
  name: string,
  role: string,
  email: string,
  password: string,
  companyRef: string,
  addressRef: string

}