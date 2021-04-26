import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ColorsGridComponent } from './components/colors-grid/colors-grid.component';
import { VoteResultComponent } from './components/vote-result/vote-result.component';

const routes: Routes = [
  {path: '', component:ColorsGridComponent},
  {path: 'vote-result', component:VoteResultComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
