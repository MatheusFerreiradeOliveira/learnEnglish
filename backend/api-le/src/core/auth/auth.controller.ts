import { Controller, UseGuards, Request, Post } from '@nestjs/common';
import { LocalAuthGuard } from './service/local-auth.guard';

@Controller('auth')
export class AuthController {
  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Request() req: any) {
    return req.user;
  }
}
