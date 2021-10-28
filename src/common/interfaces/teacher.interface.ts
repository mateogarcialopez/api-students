import { ICourse } from "./couse.interface";

export interface ITeacher extends Document {
    name: string
    surname: string
    working_day: string
    id_course: ICourse[]
}