lab04.component.html
<lifeCycle [name]="name">
</lifeCycle>


lab04.component.ts
  name = "Life Cycle Hooks"
  num:number=0;
  constructor() {
    setTimeout(() => {     
      this.name = (++this.num).toString();
      console.log(`外部改變 name : ${this.name}`);
    }, 3000);
  }