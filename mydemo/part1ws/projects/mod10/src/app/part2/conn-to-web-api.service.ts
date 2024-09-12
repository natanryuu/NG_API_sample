import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WeatherForecast } from './weather-forecast';

@Injectable({
  providedIn: 'root'
})
export class ConnToWebAPIService {
  http = inject(HttpClient);
  rootUrl = "http://localhost:5247/wf";
  constructor() { }
  // GetSummary( id:number ){
  //   this.http.get(`${this.rootUrl}/${id}`, { responseType: 'text' })
  //   .subscribe((data) => {
  //     console.log(data);
  //   });    
  // }

  GetSummary( id:number ): Observable<string> {
    return this.http.get(`${this.rootUrl}/${id}`, { responseType: 'text' });    
  }
  GetWeatherForecast () {
    return this.http.get<WeatherForecast[]>(`${this.rootUrl}/`);
  }
  GetYMDBody(y:number, m:number, d:number) {
    return this.http.get(`${this.rootUrl}/${y}/${m}/${d}`,
      { observe:'body', responseType: 'text'  }
    );
  }
  GetYMDResp(y:number, m:number, d:number) {
    return this.http.get(`${this.rootUrl}/${y}/${m}/${d}`, 
      {observe:'response', responseType: 'text'  }
    );
  }
  POSTWF(wf:WeatherForecast) {
    return this.http.post(`${this.rootUrl}`, wf, { responseType: 'text' });
  }

}
