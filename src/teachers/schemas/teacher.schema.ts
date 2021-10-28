import * as mongoose from "mongoose"

export const teacherSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        surname: { type: String, required: true, unique: true },
        working_day: { type: String, required: true },
        id_course: [{ type: mongoose.Schema.Types.ObjectId, ref: 'courses' }]
    },
    {
        timestamps: true
    }
)