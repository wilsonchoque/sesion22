import { Router } from '@angular/router';
import { UserServiceService } from 'src/app/services/user-service.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {


  constructor(private userService: UserServiceService, private router: Router){

  }

  logout(){
    this.userService.logOut()
    .then( response => {
      console.log(response)
      this.router.navigate(['/login'])
    })
    .catch( error => console.log(error));
  }

}
