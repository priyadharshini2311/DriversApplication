import { Component, OnInit } from '@angular/core';
import { ApiCallsService } from 'src/app/Services/api-calls.service';

@Component({
  selector: 'app-driver',
  templateUrl: './driver.component.html',
  styleUrls: ['./driver.component.scss']
})
export class DriverComponent implements OnInit {
  public title: string ="";
  public Drivers :driverRecord[] =[]; 
  constructor(private ApiCallsService :ApiCallsService) { }

  ngOnInit(): void {
    this.title = "Project Drivers"
    this.getDriversList();
  }

  getDriversList(){
    this.ApiCallsService.DriversLookup()
    .subscribe({
      next: (data: driverRecord[]) => {
        if (data) {
          this.Drivers = data;
          console.log(data);
        }        
      },
      error: (errMessage: any) => {
        console.log(errMessage);      
      }
    });
  }
}

//Pending Event search response from DCMS
interface driverRecord {
 ID :number,
 firstName :string,
 lastName :string,
 email : string,
 phone : string
}
