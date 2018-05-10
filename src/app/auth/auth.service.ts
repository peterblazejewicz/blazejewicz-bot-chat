import { Injectable } from '@angular/core';
import { IAuthService } from './IAuthService';
import { WebAuth } from 'auth0-js';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements IAuthService {
  auth0: WebAuth;
  constructor() {
    this.auth0 = new WebAuth({
      domain: '',
      clientID: '',
      responseType: 'token'
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
