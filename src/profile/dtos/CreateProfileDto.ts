/* eslint-disable prettier/prettier */
import { Address } from 'src/typeorm/entities/Address';
import { User } from 'src/typeorm/entities/User';

export class CreateProfileDto {
    firstname: string;
    lastname: string;
    gender: 'homme' | 'femme';
    age: number;
    address: Address;
    user: User;
}