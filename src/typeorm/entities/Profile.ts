/* eslint-disable prettier/prettier */
import { IsString } from 'class-validator';
import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from 'typeorm';
import { Address } from './Address';
import { User } from './User';

@Entity({ name: 'profile' })
export class Profile {
  @PrimaryGeneratedColumn({type: 'bigint'})
  public id: number;
  
  @Column()
  @IsString()
  public firstname: string;

  @Column()
  @IsString()
  public lastname: string
  
  @Column()
  public age: number;

  @Column()
  public gender: 'homme' | 'femme';
  
  @OneToOne(() => Address, {
    eager: true,
    cascade: true
  })
  @JoinColumn()
  public address: Address;

  @OneToOne(() => User, (user: User) => user.profile)
  public user: User
}