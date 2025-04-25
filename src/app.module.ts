import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from '@common';
import { ConfigModule } from '@common/config/config.module';

@Module({
  imports: [DatabaseModule, ConfigModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
