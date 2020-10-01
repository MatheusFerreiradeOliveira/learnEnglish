import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { FindByEmailService } from '../../../modules/user/usecases/find-by-email/find-by-email.service';
import bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    @Inject()
    private usersFindByEmailService: FindByEmailService,
  ) {}

  async validateUser(userEmail: string, userPassword: string) {
    try {
      const user = await this.usersFindByEmailService.handle(userEmail);

      const isPasswordMatching = await bcrypt.compare(
        userPassword,
        user.password,
      );
      if (!isPasswordMatching) {
        throw new HttpException(
          'Wrong credentials provided',
          HttpStatus.BAD_REQUEST,
        );
      }
      // if (user && user.password === userPassword) {
      //   const { _id, name, email } = user;
      //   return { id: _id, name, email };
      // }
      const { _id, name, email } = user;
      return { id: _id, name, email };
    } catch (error) {
      throw new HttpException(
        'Wrong credentials provided',
        HttpStatus.BAD_REQUEST,
      );
    }
  }
}
