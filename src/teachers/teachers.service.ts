import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ITeacher } from 'src/common/interfaces/teacher.interface';
import { TEACHER } from 'src/common/models/models';
import { TeacherDTO } from './dto/teacher.dto';

@Injectable()
export class TeachersService {

    constructor(@InjectModel(TEACHER.name) private readonly _model: Model<ITeacher>) { }

    async addTeacher(teacherDTO: TeacherDTO): Promise<ITeacher> {
        const newTeacher = new this._model(teacherDTO)
        return await newTeacher.save()
    }

    async getTeachers(): Promise<ITeacher[]> {
        return await this._model.find()
    }

    async getTeacher(id: string): Promise<ITeacher> {
        return await this._model.findById(id)
    }

    async updateTeacher(id: string, teacherDTO: TeacherDTO): Promise<ITeacher> {
        const teacherUpdated = await this._model.findByIdAndUpdate(id, {...teacherDTO}, { new: true })
        return teacherUpdated
    }

    async deleteTeacher(id:string): Promise<ITeacher>{
        return await this._model.findByIdAndRemove(id)
    }
}
