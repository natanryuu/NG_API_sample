import { computed, inject, Injectable, signal } from '@angular/core';
import { MeetingRoom } from './meeting-room';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MeetingRoomService {
  public formData = new MeetingRoom();
  public list=signal<MeetingRoom[]>([]);


  // rootUrl = 'http://localhost:5247/MeetingRooms'
  http= inject(HttpClient);
  rootUrl='';
  constructor() { 
    this.rootUrl=environment.apiUrl;
  }

  public recordCount=computed(()=>this.list().length);
  public totalSize=computed(()=>this.list().reduce((acc, mr)=>acc+mr.size, 0));
 
  getList() {
    this.http.get<MeetingRoom[]>(this.rootUrl)
      .subscribe(
        {
          next: resp => this.list.set(resp),
          error: error => console.log(error)
        });
  }
 getByID(id: number) {
    this.http.get<MeetingRoom>(this.rootUrl + `/${id}`)
      .subscribe({
        next: resp => this.formData = resp,
        error: error => console.log(error)
      });
  }


  postMeetingRoom() {
    return this.http.post(this.rootUrl, this.formData);
  }
  putMeetingRoom() {
    return this.http.put(this.rootUrl + `/${this.formData.id}`, this.formData);
  }
  deleteMeetingRoom(id: number) {
    return this.http.delete(this.rootUrl + `/${id}`);
  }



}
