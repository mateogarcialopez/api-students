import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CareerService } from './career.service';
import { CareerDTO } from './dto/carrer.dto';

@Controller('career')
export class CareerController {

    constructor(private readonly _service: CareerService) { }

    @Post()
    createCareer(@Body() careerDTO: CareerDTO) {
        return this._service.addCareer(careerDTO)
    }

    @Get()
    getCareers() {
        return this._service.getCareers()
    }

    @Get('/:id')
    getCarerr(@Param('id') id: string) {
        return this._service.getCareer(id)
    }

    @Put('/:id')
    updateCareer(@Param('id') id: string, @Body() careerDTO: CareerDTO) {
        return this._service.updateCareer(id, careerDTO)
    }

    @Delete('/:id')
    deleteCareer(@Param('id') id: string) {
        return this._service.deleteCareer(id)
    }
}
