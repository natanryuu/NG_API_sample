import { Directive, Input } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';
import { courses } from '../model/course';

@Directive({
  selector: '[IdIsExist]',
  standalone: true,
  providers:[ {
    provide: NG_VALIDATORS, 
    useExisting: IdIsExistsDirective, 
    multi:true}]    

})
export class IdIsExistsDirective implements Validator {
  @Input('IdIsExist') isNew : boolean=false;
  constructor() { }
  validate(control: AbstractControl): ValidationErrors | null {
    if (!this.isNew)
      return null ;
    let value = control.value;
    let result = null;
    if (this.CheckIDExist(value))
      {
        result = {
        "IdIsExist":{
          "actualValue":value, 
          "requiredValue": `課程編號 ${value} 已經存在，請重新編號`
        }}
      }
    return result;

  }
  CheckIDExist(id : string): boolean{
    let db = courses;
    let course = db.find((c)=>c.courseId === id);
    return (course!=null || course!=undefined)
  }


}
