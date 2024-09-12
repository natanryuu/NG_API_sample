import { Routes } from '@angular/router';
import { NotfoundComponent } from './layout/notfound.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { Content1Component } from './content1/content1.component';
import { Content2Component } from './content2/content2.component';
import { Content3Component } from './content3/content3.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch:'full' },
    { path: 'home', component: HomeComponent, title: '首頁'},  
    { path: 'content1', component: Content1Component, title: '樣式' },
    { path: 'content2', component: Content2Component, title: 'Event' },
    { path: 'content3', component: Content3Component, title: 'ngModel' },
    { path: 'about', component: AboutComponent, title: '關於'}, 
    
    { path: '**', component:NotfoundComponent}
];
