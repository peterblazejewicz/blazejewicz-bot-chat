export interface IAuthService {
  authenticated: boolean;
  handleLoginCallback(): void;
  login(): void;
  logout(): void;
}
