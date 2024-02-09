import { Component } from '@angular/core';
import { CarService } from './services/car.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'zoomcar1';

  registerObj: any = {
    "userId": 0,
    "name": "",
    "userRole": "",
    "emailId": "",
    "mobileNo": "",
    "password": "",
    "createdOn": new Date()
  }

  constructor(private carSrv: CarService) { }

  onRegister() {
    this.carSrv.registerUser(this.registerObj).subscribe((res: any) => {
      if (res.result) {
        alert('Register Success');
        this.closeRegister();
      } else {
        alert(res.message)
      }
    })
  }

  openRegister() {
    const modal = document.getElementById('register');
    if (modal != null) {
      modal.style.display = 'block';
    }
  }
  closeRegister() {
    const modal = document.getElementById('register');
    if (modal != null) {
      modal.style.display = 'none';
    }
  }
}
