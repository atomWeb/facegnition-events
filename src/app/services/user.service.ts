import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Auth } from 'aws-amplify';

import { LoginForm } from '../interfaces/login-form.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  async signIn(formData: LoginForm) {
    try {
      const user = await Auth.signIn(formData.email, formData.password);
      const token: string = await this.getJwtToken();
      localStorage.setItem('token', token);
    } catch (error) {
      console.log('error signing in', error);
    }
  }

  private async getJwtToken() {
    try {
      const session = await Auth.currentSession();
      return session.getIdToken().getJwtToken();
    } catch (err: any) {
      console.log('getJwtToken error: ', err);
      return err;
    }
  }

  validateToken(): Observable<boolean> {
    return of(
      localStorage.getItem('token') ? true : false
    );
  }

}


