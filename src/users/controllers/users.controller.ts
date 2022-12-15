import { CreateUserDto } from './../dtos/CreateUserDto';
import {
  Controller,
  Get,
  Post,
  Put,
  Body,
  Query,
  Param,
  ParseIntPipe,
} from '@nestjs/common';
import { UsersService } from '../services/users.service';
import { UpdateUserDto } from '../dtos/UpdateUserDto';

@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}

  @Get()
  getUsers(
    @Query()
    sort: {
      sortBy: 'ASC' | 'DESC';
      value: 'username' | 'email';
    },
  ) {
    console.log('getUsers', sort);
    if (sort.sortBy)
      return this.userService.findUsersQuery(
        sort.sortBy,
        sort.value ? sort.value : 'username',
      );
    return this.userService.findUsers();
  }

  @Get(':id')
  getUserById(@Param('id', ParseIntPipe) id: number) {
    return this.userService.findUserById(id);
  }

  @Get(':username')
  getUserByUsername(@Param() username: string) {
    return this.userService.findUserByName(username);
  }

  @Post()
  createUser(@Body() createUserDto: CreateUserDto) {
    console.log('create user controller', createUserDto);
    return this.userService.createUser(createUserDto);
  }

  @Put(':id')
  async updateUserById(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateUserDto: UpdateUserDto,
  ) {
    await this.userService.updateUser(id, updateUserDto);
  }
}
