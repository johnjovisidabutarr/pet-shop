import mongoose from 'mongoose'

const { Schema } = mongoose

const productSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    price: {
      type: Number,
      required: true,
      min: 0,
    },
    image: {
      type: String,
    },
  },
  { timestamps: true }
)

export const Product = mongoose.model('Product', productSchema)
