import { Schema, model} from "mongoose";

const movieSchema = new Schema({
  id: {
    type: Number,
    required: true,
    default: 101
  },
  
  name: {
    type: String,
    required: true,
  },
  year: {
    type: Number,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  }
},
  {
    timestamps: true
  }
)

export default model('movie',movieSchema);