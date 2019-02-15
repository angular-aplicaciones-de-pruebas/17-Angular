import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CursoComponent } from './components/curso/curso.component';

const APP_ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'curso', component: CursoComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES,{useHash:true});
