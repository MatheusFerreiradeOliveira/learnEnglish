import { Module } from '@nestjs/common';
import { UserModule } from '../../modules/user/user.module';
import { AuthController } from './auth.controller';
import { AuthService } from './service/auth.service';
import { LocalStrategy } from './service/local.strategy';
@Module({
  imports: [UserModule],
  controllers: [AuthController],
  providers: [AuthService, LocalStrategy],
})
export class AuthModule {}
