/////////////////////////////////////////////////////////////
// Off-Road Portal AngularClient                           //
// Bachelor's thesis software                              //
// Author and software owner Maciej Schulc                 //
// All rights reserved ®                                   //
// File: event.service.ts                                  //
/////////////////////////////////////////////////////////////

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { _Event } from '../models/event';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(private http: HttpClient) { }

  baseUrl = environment.apiUrl;
  public eventId: number = 0;

  getEvents(url: string) : Observable<_Event[]>{
    return this.http.get<_Event[]>(this.baseUrl + url);
  }

  getEventById(url: string, id: string): Observable<_Event>{
    return this.http.get<_Event>(this.baseUrl + url + id);
  }

  getEventsByParticipant(url: string, userId: string): Observable<_Event[]>{
    return this.http.get<_Event[]>(this.baseUrl + url + userId)
  }

  getEventsByAuthorId(url: string, id: string): Observable<_Event[]>{
    return this.http.get<_Event[]>(this.baseUrl + url + id)
  }

  getEventByCategory(url: string, category: string): Observable<_Event[]>{
    return this.http.get<_Event[]>(this.baseUrl + url + category);
  }

  addEvent(model: any, url: string): Observable<any>{
    return this.http.post<_Event>(this.baseUrl + url, model);
  }

  updateEvent(model: any, url: string): Observable<any>{
    return this.http.patch<_Event>(this.baseUrl + url, model);
  }

  deleteEvent(url: string){
    this.http.delete(this.baseUrl + url).subscribe(
      Response => {
        console.log(Response);
      }, error => {
        console.log(error);
      }
    );
  }

  public setEventId(eventId: number) {
    this.eventId = eventId;
    console.log(this.eventId);
  }

  public getEventId(): number{
    return this.eventId;
  }
}
