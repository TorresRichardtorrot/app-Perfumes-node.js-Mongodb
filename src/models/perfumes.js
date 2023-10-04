import mongoose from "mongoose";

const perfumeSchema = mongoose.Schema(
  {
    image:{
        type: String,
        required:true
    }, 
    brand: {
      type: String,
      required: true,
      trim: true,
    },

    name: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: false,
      trim: false,
    },
    price: {
      type: Number,
      required: true,
      min: 0,
    },
    category: {
      type: String,
      required: false,
      enum: ["Caballero", "Dama"],
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
    versionKey: false
  }
);

export default mongoose.model("Perfumes", perfumeSchema);
