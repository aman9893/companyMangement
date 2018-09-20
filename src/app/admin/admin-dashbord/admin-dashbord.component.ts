import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { AuthService } from '../../authservice';
@Component({
  selector: 'app-admin-dashbord',
  templateUrl: './admin-dashbord.component.html',
  styleUrls: ['./admin-dashbord.component.css']
})
export class AdminDashbordComponent implements OnInit {

  constructor(private authService: AuthService,public router: Router) { }

  ngOnInit() {
  }
  logout(){
    this.authService.logout();
  }
  createLibraryDialog(){
    this.router.navigate(['/booklist']);
  }
}
