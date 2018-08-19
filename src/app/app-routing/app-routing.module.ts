import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import { MapsComponent } from '../components/maps/maps.component';

const routes: Routes = [
  { path: '', component: MapsComponent }
];

@NgModule({
  exports: [RouterModule],
  imports: [
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
