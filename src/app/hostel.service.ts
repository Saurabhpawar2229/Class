import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HostelService 
{

  constructor() { }

  GetHostelDetails()
{
  return [
    {"Name":"ABC", "Fees":100000, "Duration":"1 Year"},
    {"Name":"XYZ", "Fees":200000, "Duration":"2 Year"},
    {"Name":"PQR", "Fees":300000, "Duration":"3 Year"},
    {"Name":"MNR", "Fees":400000, "Duration":"4 Year"},
        ];
}

}
