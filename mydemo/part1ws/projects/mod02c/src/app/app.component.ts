import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from "./nav/nav.component";
import { HomeComponent } from "./home/home.component";
import { FooterComponent } from "./footer/footer.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavComponent, HomeComponent, FooterComponent],
  template: `
    <section class="container">
      <header>
        <h1>Welcome to {{title}}!</h1>    
        <uuu-nav></uuu-nav>   
      </header>
      <section class="content">
       <router-outlet></router-outlet>
      </section>

      <footer>
        <footer></footer>
      </footer>
    </section>
  `,
  styles: `
  .container {
    height: 100vh;
    display: flex;
    flex-direction: column;
  }
  nav {
    background-color: lightgray;
    color: white;
    padding: 10px;
  }

  nav a {
    color: white;
    text-decoration: none;
    margin-right: 10px;
  }

  nav a:hover {
    text-decoration: underline;
  }
  header, footer {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: lightgray;
  }

  .content {
    flex: 8.5;
  }

  footer {
    flex: 0.5;
  }
  `,
})
export class AppComponent {
  title = 'mod02c';
}
