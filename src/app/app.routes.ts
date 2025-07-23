import { RouterModule, Routes } from '@angular/router';
import { Home } from './cloudhold/item/home/home';
import { Home_project } from './cloudhold/item/home_project/home_project';
import { NgModule } from '@angular/core';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'project/:id', component: Home_project }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CloudholdRoutingModule {}
