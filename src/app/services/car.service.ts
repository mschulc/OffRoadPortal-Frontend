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
  carId: number = 0;
  baseUrl = environment.apiUrl;

  getCars(url: string):Observable<Car[]>{
     return this.http.get<Car[]>(this.baseUrl + url)
  }

  getCarById(url: string): Observable<Car>{
    return this.http.get<Car>(this.baseUrl + url);
  }

  addCar(model: any, url: string) :Observable<any>{
    return this.http.post<Car>(this.baseUrl + url, model);
  }

  editCar(model: any, url: string){
    return this.http.patch<Car>(this.baseUrl + url, model);
  }

  public setCarId(carId: number){
    this.carId = carId;
    console.log(this.carId)
  }

  public getCarId(): number{
    return this.carId;
  }

  deleteCar(url: string){
    this.http.delete(this.baseUrl + url).subscribe(
      Response =>
      {
        console.log(Response);
      }, error => {
        console.log(error);
      }
    );
  }
}
