import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AllExceptionFilter } from './common/http-exceptions.filter';
import { TimeOutInterceptor } from './common/timeOutInterceptor';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe())
  app.useGlobalFilters(new AllExceptionFilter())
  app.useGlobalInterceptors(new TimeOutInterceptor())
  await app.listen(3000);
}
bootstrap();
