/* eslint-disable prettier/prettier */
import { Entity, PrimaryGeneratedColumn, Column, OneToOne } from 'typeorm';
import { transformDate } from 'src/utils/transform-date';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
import { Profile } from './Profile';

@Entity({ name: 'address' })
export class Address {
  @PrimaryGeneratedColumn({type: 'bigint'})
  public id: number;
  
  @Column()
  @IsString()
  public street: string;

  @Column()
  @IsString()
  public city: string
  
  @Column()
  @IsString()
  public country: string;

  @OneToOne(() => Profile, (profile: Profile) => profile.address)
  public profile: Profile
  
}