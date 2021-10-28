import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ICourse } from 'src/common/interfaces/couse.interface';
import { COURSE } from 'src/common/models/models';
import { courseDTO } from './dto/course.dto';

@Injectable()
export class CoursesService {

    constructor(@InjectModel(COURSE.name) private readonly _course_model: Model<ICourse>) { }

    async addCourse(courseDTO: courseDTO): Promise<ICourse> {
        const course = new this._course_model(courseDTO)
        return await course.save()
    }

    async getCourses(): Promise<ICourse[]> {
        const courses = await this._course_model.find()
        return courses
    }

    async getCourse(id: string): Promise<ICourse> {
        const course = await this._course_model.findById(id)
        return course
    }

    async updateCourse(id: string, courseDTO: courseDTO): Promise<ICourse> {
        const courseUpdated = await this._course_model.findByIdAndUpdate(id, { ...courseDTO }, { new: true })
        return courseUpdated
    }

    async deleteCourse(id: string): Promise<ICourse>{
        return await this._course_model.findByIdAndRemove(id)
    }
}
