/* eslint-disable prettier/prettier */
import { Profile } from "src/typeorm/entities/Profile";

export class UpdateUserDto {
    username: string;
    email: string;
    password: string;
    profile: Profile;
  }