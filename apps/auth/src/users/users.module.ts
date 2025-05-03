import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { ConfigModule, DatabaseModule } from '@common';
import { UserDocument, UserSchema } from './models/users.schema';
import { UsersRepository } from './users.repository';

@Module({
  imports:[DatabaseModule, 
      ConfigModule, 
      DatabaseModule.forFeature([{ name: UserDocument.name, schema: UserSchema }]),],
  controllers: [UsersController],
  providers: [UsersService, UsersRepository]
})
export class UsersModule {}
