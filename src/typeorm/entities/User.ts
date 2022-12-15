/* eslint-disable prettier/prettier */
import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from 'typeorm';
import { transformDate } from 'src/utils/transform-date';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
import { Profile } from './Profile';

@Entity({ name: 'users' })
export class User {
  @PrimaryGeneratedColumn({type: 'bigint'})
  id: number;
  
  @Column({ unique: true })
  @IsString()
  username: string;

  @Column({ unique: true })
  @IsEmail()
  email: string
  
  @Column()
  @IsString()
  password: string;
  
  @OneToOne(() => Profile, {
    eager: true,
    cascade: true
  })
  @JoinColumn()
  public profile: Profile;
  
  @Column({ default: transformDate(new Date()) })
  createdAt: Date;
  
  @Column({ nullable: true })
  authStrategy: string;
}