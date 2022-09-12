import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Car } from '../models/car';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor(private http: HttpClient) { }

  baseUrl = environment.apiUrl;

  getCars(url: string):Observable<Car[]>{
     return this.http.get<Car[]>(this.baseUrl + url)
  }

  addCar(model: any, url: string){
    return this.http.post<Car>(this.baseUrl + url, model);
  }

  editCar(model: any, url: string){
    return this.http.patch<Car>(this.baseUrl + url, model);
  }
}
