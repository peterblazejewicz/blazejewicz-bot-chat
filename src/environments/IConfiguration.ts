import { AuthOptions } from 'auth0-js';
export interface IConfiguration {
  production: boolean;
  authOptions: AuthOptions;
}
