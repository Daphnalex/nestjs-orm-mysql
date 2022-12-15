/* eslint-disable prettier/prettier */
import * as bcrypt from 'bcrypt';
import { UsersService } from 'src/users/services/users.service';

/*export class AuthenticationService {
  constructor(private readonly usersService: UsersService) {}

  public async register(registrationData: RegisterDto) {
    const hashedPassword = await bcrypt.hash(registrationData.password, 10);
    try {
      const createdUser = await this.usersService.createUser({
        ...registrationData,
        password: hashedPassword,
      });
      createdUser.password = undefined;
      return createdUser;
    } catch (error) {
      if (error) console.log('error', error);
    }
  }
}*/
