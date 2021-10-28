import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { COURSE } from 'src/common/models/models';
import { CoursesController } from './courses.controller';
import { CoursesService } from './courses.service';
import { courseSchema } from './schemas/course.schema';

@Module({
  imports: [
    MongooseModule.forFeatureAsync([{
      name: COURSE.name,
      useFactory: () => courseSchema
    }])
  ],
  controllers: [CoursesController],
  providers: [CoursesService]
})
export class CoursesModule { }
