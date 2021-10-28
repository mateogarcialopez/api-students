import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TEACHER } from 'src/common/models/models';
import { CoursesModule } from 'src/courses/courses.module';
import { teacherSchema } from './schemas/teacher.schema';
import { TeachersController } from './teachers.controller';
import { TeachersService } from './teachers.service';

@Module({
  imports: [
    MongooseModule.forFeatureAsync([{
      name: TEACHER.name,
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      useFactory: () => teacherSchema.plugin(require('mongoose-autopopulate'))
    }]),
    CoursesModule
  ],
  controllers: [TeachersController],
  providers: [TeachersService]
})
export class TeachersModule { }
