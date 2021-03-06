import { Component } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { Router } from '@angular/router';
import { ToastService } from '../_services/toast.service';

@Component({
  selector: 'app-profile',
  templateUrl: 'profile.page.html',
  styleUrls: ['profile.page.scss']
})
export class ProfilePage {

  constructor(private authService: AuthService, private router: Router, private toast: ToastService) {}

  logOut() {
    localStorage.removeItem('token');
    localStorage.removeItem('userid');
    this.router.navigate(['/login']);
  }

}
