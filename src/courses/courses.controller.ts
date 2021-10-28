import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CoursesService } from './courses.service';
import { courseDTO } from './dto/course.dto';

@Controller('courses')
export class CoursesController {

    constructor(private readonly _courseService: CoursesService) { }

    @Post()
    addCourse(@Body() courseDTO: courseDTO) {
        return this._courseService.addCourse(courseDTO)
    }

    @Get()
    getCourses() {
        return this._courseService.getCourses()
    }

    @Get('/:id')
    getCourse(@Param('id') id: string) {
        return this._courseService.getCourse(id)
    }

    @Put('/:id')
    updateCourse(@Param('id') id: string, @Body() courseDTO: courseDTO) {
        return this._courseService.updateCourse(id, courseDTO)
    }

    @Delete('/:id')
    deleteCourse(@Param('id') id: string) {
        return this._courseService.deleteCourse(id)
    }
}
