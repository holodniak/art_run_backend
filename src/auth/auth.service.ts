import { Injectable } from '@nestjs/common';
import strava from 'strava-v3';

@Injectable()
export class AuthService {
  async exchangeCodeForToken(code: string): Promise<string> {
    try {
      const stravaConfig = {
        client_id: process.env.STRAVA_CLIENT_ID,
        client_secret: process.env.STRAVA_CLIENT_SECRET,
        access_token: '',
        redirect_uri: '',
      }
      
      strava.config(stravaConfig)

      const tokenResponse = await strava.oauth.getToken(code);
      return tokenResponse.access_token;
    } catch (error) {
      throw new Error('Falha ao trocar código por token');
    }
  }
}
