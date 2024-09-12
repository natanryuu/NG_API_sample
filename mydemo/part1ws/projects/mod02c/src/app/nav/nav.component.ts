import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterModule } from '@angular/router';
import { routes } from '../app.routes';

@Component({
  selector: 'uuu-nav',
  standalone: true,
  imports: [RouterModule],
  template: `
  <nav>
    <ul>
      <!-- <li>
        <a routerLink="home" routerLinkActive="active" >Home</a>
      </li>
      <li>
        <a routerLink="about" routerLinkActive="active" >About</a>
      </li> -->
<!-- 使用 @for 套用 routes 中的 path 及 title -->
@for( route of routeList ; track route.path){
  @if(route.title){
      <li >
        <a routerLink="{{route.path}}" routerLinkActive="active">{{route.title}}</a>
      </li>
    }
}

    </ul>
  </nav>

  `,
  styles: `
  /*
  幫我產生 style 樣式區塊，
  1-去除原點，不要底線
  2-a 的內物件邊距是14px 16px
  3-當滑鼠滑過時背景要變成深灰，白字
  4-每個項目要水平排列
  5-項目之間的間距是10px
  */
  nav ul {
    list-style-type: none;
    padding: 0;
  }
  nav a {
    padding: 14px 16px;
    text-decoration: none;
  }
  nav a:hover {
    background-color: #ddd;
    color: black;
  }
  nav li {
    display: inline;
    margin-right: 10px;
  }

/*
在 style 區塊中加入 active 類別，深灰底、白字、粗體
*/

  .active {
    background-color:darkgray;
    color: white;
    font-weight: bold;
  }

  `
})
export class NavComponent {
  routeList = routes;
}
