import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ColorsGridComponent } from './colors-grid/colors-grid.component';

const routes: Routes = [
  {path: '', component:ColorsGridComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
