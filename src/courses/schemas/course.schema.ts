import * as mongoose from 'mongoose'

export const courseSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        duration: { type: String, required: true },
        area: { type: String, required: true },
        photo_schedule: { type: String, required: true },
    },
    {
        timestamps: true
    }
)