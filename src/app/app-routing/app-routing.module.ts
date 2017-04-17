import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Routes } from '@angular/router';

import { DashboardComponent } from '../dashboard/dashboard.component';
import { HeroesComponent } from '../heroes/heroes.component';
import { HeroDetailsComponent } from '../hero-details/hero-details.component';

const routesHero: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path:'heroes',
    component: HeroesComponent
  },
  {
    path:'detail/:id',
    component: HeroDetailsComponent
  }
];


@NgModule({
  imports: [
    RouterModule.forRoot(routesHero)
  ],
  exports:[ RouterModule ]
})
export class AppRoutingModule { }
