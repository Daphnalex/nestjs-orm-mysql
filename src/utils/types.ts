/* eslint-disable prettier/prettier */
import { Address } from 'src/typeorm/entities/Address';
import { Profile } from 'src/typeorm/entities/Profile';
import { User } from 'src/typeorm/entities/User';

export type CreateUserParams = {
  username: string;
  email: string;
  password: string;
  profile: Profile;
}

export type UpdateUserParams = {
    username: string;
    email: string;
    password: string;
    profile: Profile;
}

export type CreateProfileParams = {
    firstname: string;
    lastname: string;
    gender: 'femme' | 'homme';
    age: number;
    address: Address;
    user: User;
}

export type UpdateProfileParams = {
    firstname: string;
    lastname: string;
    gender: 'femme' | 'homme';
    age: number;
    address: Address;
    user: User;
}