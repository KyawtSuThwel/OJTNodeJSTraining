import { Schema, model } from 'mongoose';

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
  },
},
  {
    timestamps: true
  }
);
export default model("user", userSchema)