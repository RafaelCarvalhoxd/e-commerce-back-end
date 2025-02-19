import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { name, version, description } from '../package.json';
import { Logger, ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const logger = new Logger(bootstrap.name);

  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix('api/e-commerce');

  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
    }),
  );

  const port = parseInt(process.env.PORT, 10) || 3000;

  const documentBuilder = new DocumentBuilder()
    .setTitle(name)
    .setDescription(description)
    .setVersion(version)
    .addBearerAuth()
    .build();

  const documentFactory = SwaggerModule.createDocument(app, documentBuilder);

  SwaggerModule.setup('docs', app, documentFactory, {
    useGlobalPrefix: true,
  });

  await app.listen(port, async () => {
    logger.log(`Server is running on http://localhost:${port}`);
    logger.log(
      `Swagger is running on http://localhost:${port}/api/e-commerce/docs`,
    );
  });
}
bootstrap();
