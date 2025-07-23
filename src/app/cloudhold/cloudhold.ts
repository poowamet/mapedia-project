import { Component } from '@angular/core';
import { Sidebar } from './sidebar/sidebar';
import { Home } from './item/home/home';
import { Home_project } from "./item/home_project/home_project";
import { CloudholdRoutingModule } from '../app.routes';

@Component({
  selector: 'app-cloudhold',
  imports: [
    Sidebar,
    CloudholdRoutingModule,
],
  templateUrl: './cloudhold.html',
})
export class Cloudhold {

}
