/////////////////////////////////////////////////////////////
// Off-Road Portal AngularClient                           //
// Bachelor's thesis software                              //
// Author and software owner Maciej Schulc                 //
// All rights reserved ®                                   //
// File: member.ts                                         //
/////////////////////////////////////////////////////////////

export interface Member
{
  Id: string;
  Name: string;
  Role: string;
  BirthDate: Date;
  ProfileImageUrl: string;
  PhoneNumber: string;
  City: string;
  Email: string;
  Cars: string;
}
