import * as mongoose from "mongoose";

export const careerSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        credits: { type: Number, required: true },
        cost: { type: Number, required: true },
    },
    {
        timestamps: true
    }
)