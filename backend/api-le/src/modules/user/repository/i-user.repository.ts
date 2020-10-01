import { User } from '../schemas/user.schema';

export interface IUserRepository {
  findById(id: string): Promise<User>;
}
