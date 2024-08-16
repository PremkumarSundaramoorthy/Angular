import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ICurrentUser } from '../../_models/user.model';
import { AuthService } from '../../_services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  user: ICurrentUser;

  userSub: Subscription;

  constructor(private authService: AuthService, private router: Router, private toastr: ToastrService) { }

  ngOnInit() {
    this.userSub = this.authService.currentUser$.subscribe(
      (currentUser: ICurrentUser) => {
        this.user = currentUser;
      });
  }

  onLogout() {
    this.authService.logout();
    this.toastr.warning('Loggedout successfully');
    this.router.navigateByUrl('/');

  }

  ngOnDestroy() {
    this.userSub.unsubscribe();
  }
}
