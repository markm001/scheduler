import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MemberComponent} from "./member/member.component";
import {TeamComponent} from "./team/team.component";

const routes: Routes = [
  {component: MemberComponent, path:'teams/:id/members'},
  {component: TeamComponent, path:'teams'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
