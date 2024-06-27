import { Injectable } from '@nestjs/common';
import strava, { DetailedActivityResponse } from 'strava-v3';

@Injectable()
export class ActivitiesService {
  async getAllActivities(accessToken: string): Promise<DetailedActivityResponse[]> {
    try {
      const activities = await strava.athlete.listActivities({ access_token: accessToken });
      return activities;
    } catch (error) {
      throw new Error('Failed to fetch activities');
    }
  }

  async getActivityById(accessToken: string, activityId: string): Promise<DetailedActivityResponse> {
    try {
      const activity = await strava.activities.get({ access_token: accessToken, id: activityId });
      return activity;
    } catch (error) {
      throw new Error(`Failed to fetch activity with ID ${activityId}`);
    }
  }
}
