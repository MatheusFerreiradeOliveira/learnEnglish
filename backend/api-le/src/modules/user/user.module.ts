import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from './schemas/user.schema';
import { FindByEmailUseCase } from './usecases/find-by-email/find-by-email.usecase';
import { FindByEmailService } from './usecases/find-by-email/find-by-email.service';
import { UserMongoRepository } from './repository/implementations/user-mongo.repository';
import { UserController } from './user.controller';
import { CreateService } from './usecases/create/create.service';
import { CreateUseCase } from './usecases/create/create.usecase';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
  ],
  controllers: [UserController],
  providers: [
    CreateService,
    CreateUseCase,
    FindByEmailUseCase,
    FindByEmailService,
    { provide: 'IUserRepository', useClass: UserMongoRepository },
  ],
  exports: [FindByEmailService],
})
export class UserModule {}
