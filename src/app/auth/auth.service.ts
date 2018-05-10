import { Injectable } from '@angular/core';
import { IAuthService } from './IAuthService';
import { WebAuth } from 'auth0-js';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements IAuthService {
  private auth0: WebAuth;
  constructor() {
    this.auth0 = new WebAuth({
      domain: environment.authOptions.domain,
      clientID: environment.authOptions.clientID,
      responseType: environment.authOptions.responseType,
    });
  }
  get authenticated(): boolean {
    throw new Error('Method not implemented.');
  }
  handleLoginCallback(): void {
    throw new Error('Method not implemented.');
  }
  login(): void {
    throw new Error('Method not implemented.');
  }
  logout(): void {
    throw new Error('Method not implemented.');
  }
}
