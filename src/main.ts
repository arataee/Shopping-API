import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { UseAllExceptionFilters } from './utils/exceptions';

async function bootstrap() {
	const app = await NestFactory.create(AppModule);
	app.useGlobalPipes(new ValidationPipe());
	app.useGlobalFilters.apply(this, UseAllExceptionFilters);
	await app.listen(process.env.SERVER_PORT || 3000);
}
bootstrap();
