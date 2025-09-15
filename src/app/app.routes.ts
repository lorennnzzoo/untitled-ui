import { Routes } from '@angular/router';
import { Projects } from './Pages/projects/projects';

export const routes: Routes = [
    {path:'', component:Projects},
     { path: '**', component: Projects }
];
