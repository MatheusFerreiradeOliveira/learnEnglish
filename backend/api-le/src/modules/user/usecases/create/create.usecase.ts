import { Inject, Injectable } from '@nestjs/common';
import { IUserRepository } from '../../repository/i-user.repository';
import { User } from '../../schemas/user.schema';
import bcrypt from 'bcrypt';

@Injectable()
export class CreateUseCase {
  constructor(
    @Inject('IUserRepository')
    private iUserRepository: IUserRepository,
  ) {}
  async execute(dto: User): Promise<User> {
    const user = new User();
    user.avatar = dto.avatar;
    user.name = dto.name;
    user.email = dto.email;
    user.type_profile = dto.type_profile;
    user.password = await bcrypt.hash(dto.password, 10);
    return this.iUserRepository.create(user);
  }
}
