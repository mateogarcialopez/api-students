import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { TeacherDTO } from './dto/teacher.dto';
import { TeachersService } from './teachers.service';

@Controller('teachers')
export class TeachersController {

    constructor(private readonly _teacherService: TeachersService) { }

    @Post()
    addTeacher(@Body() teacherDTO: TeacherDTO) {
        return this._teacherService.addTeacher(teacherDTO)
    }

    @Get()
    getTeachers() {
        return this._teacherService.getTeachers()
    }

    @Get('/:id')
    getTeacher(@Param('id') id: string) {
        return this._teacherService.getTeacher(id)
    }

    @Put('/:id')
    updateTeacher(@Param('id') id: string, @Body() teacherDTO: TeacherDTO) {
        return this._teacherService.updateTeacher(id, teacherDTO)
    }

    @Delete('/:id')
    deleteTeacher(@Param('id') id: string) {
        return this._teacherService.deleteTeacher(id)
    }
}
