import mongoose from "mongoose";

const cardModel = new mongoose.Schema(
    {
        image: {
            type: String,
        },
        title: {
            type: String,
        },
        description: {
            type: String,
        },
        price: {
            type: Number,
        }
    }
)

export default mongoose.model("Cart",cardModel);
