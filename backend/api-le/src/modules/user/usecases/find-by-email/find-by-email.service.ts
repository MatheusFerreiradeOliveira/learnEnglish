import { Inject, Injectable } from '@nestjs/common';
import { User } from '../../schemas/user.schema';
import { FindByEmailUseCase } from './find-by-email.usecase';

@Injectable()
export class FindByEmailService {
  constructor(private findByEmailUseCase: FindByEmailUseCase) {}
  handle(email: string): Promise<User> {
    return this.findByEmailUseCase.execute(email);
  }
}
