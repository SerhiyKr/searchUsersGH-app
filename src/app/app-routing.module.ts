import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SearchComponent} from './components/search/search.component';
import {UserReposComponent} from './components/user-repos/user-repos.component';

const routes: Routes = [
  {path: '', component: SearchComponent},
  {path: 'repos', component: UserReposComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
