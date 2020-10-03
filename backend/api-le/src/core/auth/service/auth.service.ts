import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { FindByEmailService } from '../../../modules/user/usecases/find-by-email/find-by-email.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(private usersFindByEmailService: FindByEmailService) {}

  async validateUser(userEmail: string, userPassword: string) {
    try {
      const user = await this.usersFindByEmailService.handle(userEmail);
      await this.verifyPassword(userPassword, user.password);
      // if (user && user.password === userPassword) {
      //   const { _id, name, email } = user;
      //   return { id: _id, name, email };
      // }
      user.password = undefined;
      return user;
    } catch (error) {
      throw new HttpException(
        'Wrong credentials provided',
        HttpStatus.BAD_REQUEST,
      );
    }
  }
  private async verifyPassword(
    plainTextPassword: string,
    hashedPassword: string,
  ) {
    const isPasswordMatching = await bcrypt.compare(
      plainTextPassword,
      hashedPassword,
    );
    if (!isPasswordMatching) {
      throw new HttpException(
        'Wrong credentials provided',
        HttpStatus.BAD_REQUEST,
      );
    }
  }
}
