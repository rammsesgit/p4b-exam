import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { Profile } from './profile.entity';
import { ProfilesService } from './profiles.service';

@Controller('profiles')
export class ProfilesController {
  constructor(private profilesService: ProfilesService) {}

  @Get()
  getProfiles(): Promise<Profile[]> {
    return this.profilesService.getProfiles();
  }

  @Get(':id')
  getProfile(@Param('id', ParseIntPipe) id: number): Promise<Profile> {
    return this.profilesService.getProfile(id);
  }
}
