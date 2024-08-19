const mongoose = require("mongoose"); // Erase if already required

// Declare the Schema of the Mongo model
var productSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    slug: {
      type: String,
      required: true,
      lowercase: true,
    },
    description: {
      type: String,
      required: true,
    },
    bard: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    category: {
      type: mongoose.Types.ObjectId,
      ref: "Category",
    },
    quantity: {
      type: Number,
      default: 0,
    },
    sole: {
      type: Number,
      default: 0,
    },
    images: [
      {
        type: String,
      },
    ],
    colors: {
      type: String,
      enum: ["black", "red", "blue", "yellow", "prink"],
    },
    rating: [
      {
        star: { type: Number },
        postBy: { type: mongoose.Types.ObjectId, ref: "User" },
        content: { type: String },
      },
    ],
    totalRating: { type: Number, default: 0 },
  },
  {
    timestamps: true,
  }
);

//Export the model
module.exports = mongoose.model("Product", productSchema);
