import { Controller, Get, Param, Req } from '@nestjs/common';
import { ActivitiesService } from './activities.service';
import { DetailedActivityResponse } from 'strava-v3';
import { ApiTags } from '@nestjs/swagger';

@Controller('activities')
@ApiTags('activities')
export class ActivitiesController {
  constructor(private readonly activitiesService: ActivitiesService) {}

  @Get()
  async getAllActivities(@Req() request): Promise<DetailedActivityResponse[]> {
    const accessToken = request.headers['authorization'].replace('Bearer ', '');
    return this.activitiesService.getAllActivities(accessToken);
  }

  @Get(':activityId')
  async getActivityById(@Req() request, @Param('activityId') activityId: string): Promise<DetailedActivityResponse> {
    const accessToken = request.headers['authorization'].replace('Bearer ', '');
    return this.activitiesService.getActivityById(accessToken, activityId);
  }
}
