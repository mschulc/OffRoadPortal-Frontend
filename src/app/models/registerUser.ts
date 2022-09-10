/////////////////////////////////////////////////////////////
// Off-Road Portal AngularClient                           //
// Bachelor's thesis software                              //
// Author and software owner Maciej Schulc                 //
// All rights reserved ®                                   //
// File: registerUser.ts                                   //
/////////////////////////////////////////////////////////////

export interface RegisterUser {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  password: string;
  confirmPassword: string;
  birthDate: Date;
  city: string;
  profileImageUrl: string;
}
