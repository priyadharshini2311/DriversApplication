import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Observer } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiCallsService {
  coreServiceURL:string ="https://localhost:44334"
  constructor(private httpClient: HttpClient) { }

  DriversLookup(  
  ) {    

    return new Observable((observer: Observer<any>) => {
      return this.httpClient.get(`${this.coreServiceURL}/api/Drivers/`).subscribe(
        {
          next: (data: any) => {            
            // If return responseCode is '00', then proceed            
              observer.next(data); 
          
          },
          error: (err) => {     
            observer.error("error");
          },
          complete: () => {
            // Makes the returned Observable finite. (No need to unsubscribe)
            observer.complete();
          }
        }
      );
    });
  }
}
