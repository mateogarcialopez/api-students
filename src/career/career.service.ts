import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ICareer } from 'src/common/interfaces/career.interface';
import { CAREER } from 'src/common/models/models';
import { CareerDTO } from './dto/carrer.dto';

@Injectable()
export class CareerService {


    constructor(@InjectModel(CAREER.name) private readonly _modelCareer: Model<ICareer>) { }

    async addCareer(careerDTO: CareerDTO): Promise<ICareer> {
        const createUser = new this._modelCareer({ ...careerDTO })
        const userCreated = await createUser.save()
        return userCreated
    }

    async getCareers(): Promise<ICareer[]> {
        const careers = await this._modelCareer.find()
        return careers
    }

    async getCareer(id: string): Promise<ICareer> {
        const careers = await this._modelCareer.findById(id)
        return careers
    }

    async updateCareer(id: string, careerDTO: CareerDTO): Promise<ICareer> {
        const careersUpdated = await this._modelCareer.findByIdAndUpdate(id, { ...careerDTO }, { new: true })
        return careersUpdated
    }

    async deleteCareer(id: string): Promise<ICareer> {
        const careerDeleted = await this._modelCareer.findByIdAndDelete(id)
        return careerDeleted
    }
}
