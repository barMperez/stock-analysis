import { Module } from '@nestjs/common';
import { StocksService } from './stocks.service';
import { StocksController } from './stocks.controller';
import { DatabaseModule, LoggerModule } from '@common';
import { ConfigModule } from '@common/config/config.module';
import { StocksRepository } from './stocks.repository';
import { StockDocument, StockSchema } from './models/stock.schema';

@Module({
  imports: [
    DatabaseModule, 
    ConfigModule, 
    DatabaseModule.forFeature([{ name: StockDocument.name, schema: StockSchema }]),
    LoggerModule
  ],
  controllers: [StocksController],
  providers: [StocksService, StocksRepository],
})
export class StocksModule {}
