/////////////////////////////////////////////////////////////
// Off-Road Portal AngularClient                           //
// Bachelor's thesis software                              //
// Author and software owner Maciej Schulc                 //
// All rights reserved ®                                   //
// File: EditUser.ts                                       //
/////////////////////////////////////////////////////////////

export interface EditUser
{
  id: number;
  firstName: string | undefined;
  lastName: string | undefined;
  birthDate: Date;
  phoneNumber: string | undefined;
  city: string | undefined;
  passwordHash: string | undefined;
}
