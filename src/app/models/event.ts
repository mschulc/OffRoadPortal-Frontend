/////////////////////////////////////////////////////////////
// Off-Road Portal AngularClient                           //
// Bachelor's thesis software                              //
// Author and software owner Maciej Schulc                 //
// All rights reserved ®                                   //
// File: Event.ts                                          //
/////////////////////////////////////////////////////////////

export interface _Event {
  id: number;
  eventName: string;
  eventOrganizerName: string;
  eventOrganizerId : number;
  eventDescription: string;
  createdDate: Date;
  startEventDate: Date;
  endEventDate: Date;
  type: VehicleType;
  category: EventCategory;
  participants: Array<any>;
  comments: Array<any>;
}

export enum VehicleType
{
  Car,
  Truck,
  Motorcycle,
  Bicycle,
  All
}

export enum EventCategory
{
  Expedition = 0,
  Race = 1,
  Rally = 2,
  Holiday = 3,
}
