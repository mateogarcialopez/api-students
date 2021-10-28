import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CareerModule } from './career/career.module';
import { CoursesModule } from './courses/courses.module';
import { TeachersModule } from './teachers/teachers.module';

@Module({
  imports: [
    CareerModule,
    ConfigModule.forRoot({
      envFilePath: ['.enviroment.env'],
      isGlobal: true
    }),
    MongooseModule.forRoot(process.env.MONGODB),
    CoursesModule,
    TeachersModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
