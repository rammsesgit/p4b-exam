import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { Profile } from './profile.entity';
import { ProfilesService } from './profiles.service';

@Controller('profiles')
export class ProfilesController {
  constructor(private profileService: ProfilesService) {}

  @Get()
  getProfiles(): Promise<Profile[]> {
    return this.profileService.getProfiles();
  }

  @Get(':id')
  getProfile(@Param('id', ParseIntPipe) id: number): Promise<Profile> {
    return this.profileService.getProfile(id);
  }
}
