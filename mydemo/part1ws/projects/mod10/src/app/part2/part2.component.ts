import { Component, inject } from '@angular/core';
import { ConnToWebAPIService } from './conn-to-web-api.service';
import { WeatherForecast } from './weather-forecast';
import { CommonModule, formatDate } from '@angular/common';

@Component({
  selector: 'app-part2',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './part2.component.html',
  styles: ``
})
export class Part2Component {
  connToAPI = inject(ConnToWebAPIService);
  summary = '';
  // GetSummary(id:any){
  //   if (!Number(id)) return;
  //   this.connToAPI.GetSummary(id);
  // }


  GetSummary(id:any){
    if (!Number(id)) return;
    this.connToAPI.GetSummary(id)
    .subscribe((data) => {
      this.summary = data;
    });
  }

  wfList: WeatherForecast[] = [];
  	GetWeatherForecast() {
    	this.connToAPI.GetWeatherForecast().subscribe({
      next: resp => this.wfList = resp,
      error: error => console.log(error)
    	});
  }
  bodyResult:string="";
  GetYMDBody() {
    this.connToAPI.GetYMDBody(2024, 3, 1).subscribe({
      next: resp => this.bodyResult =resp,
      error: error => this.bodyResult = `error:${error.message}`
    });
  }


  respResult:string=""; 
  GetYMDResp(){
    this.connToAPI.GetYMDResp(2024, 3, 1).subscribe({
      next: resp => this.respResult = JSON.stringify(resp),
      error: error => console.log(error)
    });
  }

  postResult:string="";
  PostWF(){
    let wf:WeatherForecast = {
      date: formatDate(new Date(), 'yyyy-MM-dd', 'en'),
      temperatureC: 35,
      temperatureF: 0,
      summary: 'Hot'
    };
    console.log(wf);
    this.connToAPI.POSTWF(wf).subscribe({
      next: resp => this.postResult=resp,
      error: error => this.postResult=`error:${error.message}`
    });
  }



}
