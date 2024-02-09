import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  apiEndPoint: string = 'https://freeapi.gerasim.in/api/ZoomCar/';
  constructor(private http: HttpClient) { }

  registerUser(obj: any) {
    return this.http.post(this.apiEndPoint + 'AddNewUser', obj)
  }
}
