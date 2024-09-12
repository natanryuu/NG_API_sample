import { Component } from '@angular/core';

@Component({
  selector: 'uuu-content2',
  standalone: true,
  imports: [],
  templateUrl: './content2.component.html',
  styles: ``
})
export class Content2Component {
  countries = ['All', 'Canada', 'USA', 'UK', 'India', 'Japan'];
  country='ALL';

  db=[
  { name: 'John', age: 25, country: 'USA' },
  { name: 'Alice', age: 30, country: 'Canada' },
  { name: 'Michael', age: 35, country: 'USA' },
  { name: 'Emily', age: 28, country: 'UK' },
  { name: 'David', age: 32, country: 'USA' },
  { name: 'Sophia', age: 27, country: 'USA' },
  { name: 'Daniel', age: 29, country: 'Canada' },
  { name: 'Olivia', age: 31, country: 'USA' },
  { name: 'Matthew', age: 26, country: 'UK' },
  { name: 'Emma', age: 33, country: 'USA' }

  ];
  member = this.db;
  onchange(value: string) {
    this.country = value;
    if (value === 'All') {
      this.member = this.db;
    } else {
      this.member = this.db.filter((m) => m.country === value);
    }
    // console.log(this.member);
  }

}
