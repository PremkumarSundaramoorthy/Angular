import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IUser } from '../../_models/user.model';
import { AuthService } from '../../_services/auth.service';

@Component({
  selector: 'app-user-auth',
  templateUrl: './user-auth.component.html',
  styleUrl: './user-auth.component.css'
})
export class UserAuthComponent {
  isRegisterMode: boolean = false;
  user: IUser = {emailAddress:'', pasword:'' }

  constructor(private authService: AuthService){}

  registerToggle() {
    this.isRegisterMode = !this.isRegisterMode;
  }

  onSubmit(form: NgForm)
  { 
    this.user.emailAddress = form.value.emailAddress;
    this.user.pasword = form.value.userPassword;

    if(this.isRegisterMode)
    {
      this.authService.register(this.user);
    }
    else{
      this.authService.login(this.user);
    }

    console.log(this.user);
  }
}
