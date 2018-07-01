import { Component, OnInit } from '@angular/core';
import { HostelService } from '../hostel.service';

@Component({
  selector: 'app-hosteldetails',
  templateUrl: './hosteldetails.component.html',
  styleUrls: ['./hosteldetails.component.css']
})
export class HosteldetailsComponent implements OnInit 
{
  // Create array to hold the information of batches
  public hostels = [];

  // Add instance of Service in constructor
  constructor(private _hotelservice: HostelService)
  {
  }

  // Call the service method once
  ngOnInit() 
  {
    this.hostels = this._hotelservice.GetHostelDetails();
  }
}
