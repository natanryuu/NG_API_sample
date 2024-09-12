import { NgClass,   JsonPipe, DatePipe } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule, NgForm} from '@angular/forms';
import { Course, courses, locations } from '../model/course';
import { IdIsExistsDirective } from './id-is-exists.directive';
import { CheckEndDateDirective } from './check-end-date.directive';

@Component({
  selector: 'app-course',
  standalone: true,
  imports: [FormsModule, NgClass, JsonPipe, DatePipe, IdIsExistsDirective, CheckEndDateDirective],
  templateUrl: './course.component.html',
  styles: ``
})
export class CourseComponent {
  course = signal<Course>(courses[0]);
  locations = locations;	
  submitted: Boolean = false;
  onSubmit(form: NgForm) {
    if (form.invalid) return;
    this.isNew = false;
    this.submitted = true;
  }


  formatDate(date: Date | undefined) {
    return date?.toISOString().substring(0, 10);
  }
  get startDate() : string | undefined{
    return this.formatDate(this.course().startDate);
  }
  set startDate(date: string) {     
    this.course().startDate = new Date(date);
  }
  get endDate() : string | undefined{
    return this.formatDate(this.course().endDate);
  }
  set endDate(date: string) {    
    this.course().endDate = new Date(date);
  }

  isNew: boolean = false;
  newCourse() {
    this.isNew = true;
    this.course = signal<Course>({ courseId: '', courseName: '', hours: 0 });
  };


}
