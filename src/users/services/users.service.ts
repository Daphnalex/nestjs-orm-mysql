import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from 'src/typeorm/entities/User';
import { CreateUserParams, UpdateUserParams } from 'src/utils/types';
import { transformDate } from 'src/utils/transform-date';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  findUsers() {
    return this.userRepository.find();
  }

  async findUsersQuery(sortBy: 'ASC' | 'DESC', value: 'username' | 'email') {
    if (sortBy) {
      const orderedUsers = await this.userRepository.find({
        order: {
          [value]: sortBy,
        },
      });
      return orderedUsers;
    }
  }

  findUserById(id: number) {
    return this.userRepository.findOneBy({ id });
  }

  findUserByName(username: string) {
    return this.userRepository.findOne({
      where: {
        username: username,
      },
    });
  }

  async createUser(userDetails: CreateUserParams) {
    try {
      const hashedPassword = await bcrypt.hash(userDetails.password, 10);
      const newUser = this.userRepository.create({
        username: userDetails.username,
        email: userDetails.email,
        password: hashedPassword,
        profile: userDetails.profile,
        createdAt: transformDate(new Date()),
      });
      console.log('new user', newUser);
      return this.userRepository.save(newUser);
    } catch (error) {
      console.log('error created user', error);
    }
  }

  updateUser(id: number, updateUserDetails: UpdateUserParams) {
    return this.userRepository.update({ id }, { ...updateUserDetails });
  }
}
