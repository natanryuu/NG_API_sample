import { Routes } from '@angular/router';
import { Part1Component } from './part1/part1.component';
import { Part2Component } from './part2/part2.component';

export const routes: Routes = [
    { path: 'part1', component: Part1Component, title:'DI 與 Service'},
    { path: 'part2', component: Part2Component , title:'使用 Service 存取 HTTPClient'},
];
