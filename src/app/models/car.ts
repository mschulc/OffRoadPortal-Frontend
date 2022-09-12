/////////////////////////////////////////////////////////////
// Off-Road Portal AngularClient                           //
// Bachelor's thesis software                              //
// Author and software owner Maciej Schulc                 //
// All rights reserved ®                                   //
// File: Car.ts                                            //
/////////////////////////////////////////////////////////////

export interface Car{
   id: number
   name: string
   mark: string
   model: string;
   engine: number;
   fuel: FuelType;
   description: string;
   imageUrl: string
   userId: number;
}
export enum FuelType
{
    Disel,
    Gas,
    LPG,
    Hybrid,
    Electric
}




