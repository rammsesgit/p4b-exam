import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Profile } from './profile.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProfilesService {
  constructor(
    @InjectRepository(Profile) private profileRepository: Repository<Profile>,
  ) {}

  getProfiles() {
    return this.profileRepository.find();
  }

  getProfile(id: number) {
    return this.profileRepository.findOne({ where: { id } });
  }
}
