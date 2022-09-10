/////////////////////////////////////////////////////////////
// Off-Road Portal AngularClient                           //
// Bachelor's thesis software                              //
// Author and software owner Maciej Schulc                 //
// All rights reserved ®                                   //
// File: user.ts                                           //
/////////////////////////////////////////////////////////////


export interface User {
  id: number;
  firstName: string;
  lastName: string;
  token: string;
  role: number;
}
