import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { MeetingRoomService } from '../shared/meeting-room.service';
import { MeetingRoom } from '../shared/meeting-room';
import { Observable } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-meeting-room-detail',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './meeting-room-detail.component.html',
  styles: ``
})
export class MeetingRoomDetailComponent {
  service = inject(MeetingRoomService);
  toastr = inject(ToastrService);
  public capacity: any[] = [
    { value: 5, text: "5人" }, { value: 10, text: "10人" },
    { value: 15, text: "15人" }, { value: 20, text: "20人" },
    { value: 30, text: "30人" }, { value: 40, text: "40人" },
    { value: 50, text: "50人" }, { value: 100, text: "100人" },
    { value: 200, text: "200人" }];


  ngOnInit() {
    this.resetForm();
    // this.toastr.show("show", "Title");
    // this.toastr.success("success", "Title");
    // this.toastr.info("info", "Title");
    // this.toastr.warning("warning", "Title");
    // this.toastr.error("error", "Title");
  }
  resetForm(form?: NgForm) {
    if (form != null)
      form.form.reset();
    this.service.formData = new MeetingRoom();
  }

  insertRecord(form: NgForm): Observable<any> {
    return this.service.postMeetingRoom();
  }
  updateRecord(form: NgForm): Observable<any> {
    return this.service.putMeetingRoom();
  }

  onSubmit(form: NgForm) {
    let message :string; 
    let result: Observable<any>;
    if (this.service.formData.id == 0){
      result = this.insertRecord(form);
      message='新增成功';
    }
    else{
      result = this.updateRecord(form);
      message='更新成功';
    }

    result.subscribe(
      {
        next: resp => {
          this.resetForm(form);
          this.toastr.success(message,'會議室管理');
          this.service.getList();
        },
        error: err => {
          this.toastr.error(`失敗: ${err}`,'會議室管理');
        }
      });
  }







}
