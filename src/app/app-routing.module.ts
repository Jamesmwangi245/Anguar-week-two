import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RepoComponent} from './repo/repo.component' 

const routes: Routes = [
  { path: 'repo-component', component: RepoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [RepoComponent]