import { NestFactory } from '@nestjs/core';
import { StocksModule } from './stocks.module';

async function bootstrap() {
  const app = await NestFactory.create(StocksModule);
  await app.listen(process.env.port ?? 3000);
}
bootstrap();
