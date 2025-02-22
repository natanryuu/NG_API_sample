import { Routes } from '@angular/router';
import { NotfoundComponent } from './layout/notfound.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { CourseComponent } from './course/course.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch:'full' },
    { path: 'home', component: HomeComponent, title: '首頁'},  
    { path: 'course', component: CourseComponent, title: '課程'},  
    { path: 'about', component: AboutComponent, title: '關於'}, 
    { path: '**', component:NotfoundComponent}
];
