import { CreateProfileDto } from './../dtos/CreateProfileDto';
import { Controller, Get, Post, Body } from '@nestjs/common';
import { ProfileService } from '../services/profile.service';

@Controller('profile')
export class ProfileController {
  constructor(private profileService: ProfileService) {}

  @Get()
  findAllProfile() {
    return this.profileService.findAllProfile();
  }

  @Post()
  createProfile(@Body() newProfile: CreateProfileDto) {
    return this.profileService.createProfile(newProfile);
  }
}
