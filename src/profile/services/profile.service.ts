import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Profile } from 'src/typeorm/entities/Profile';
import { Repository } from 'typeorm';
import { CreateProfileParams } from 'src/utils/types';

@Injectable()
export class ProfileService {
  constructor(
    @InjectRepository(Profile) private profileRepository: Repository<Profile>,
  ) {}

  findAllProfile() {
    return this.profileRepository.find();
  }

  async createProfile(profileDetails: CreateProfileParams) {
    try {
      const newProfile = this.profileRepository.create({
        firstname: profileDetails.firstname,
        lastname: profileDetails.lastname,
        age: profileDetails.age,
        gender: profileDetails.gender,
        address: profileDetails.address,
        user: profileDetails.user,
      });
      console.log('new user', newProfile);
      return this.profileRepository.save(newProfile);
    } catch (err) {
      console.log('error', err);
    }
  }
}
