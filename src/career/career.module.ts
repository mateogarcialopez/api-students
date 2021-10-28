import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CAREER } from 'src/common/models/models';
import { CareerController } from './career.controller';
import { CareerService } from './career.service';
import { careerSchema } from './schema/carrer.schema';

@Module({
  imports: [
    MongooseModule.forFeatureAsync([{
      name: CAREER.name,
      useFactory: () => careerSchema
    }])
  ],
  controllers: [CareerController],
  providers: [CareerService]
})
export class CareerModule { }
