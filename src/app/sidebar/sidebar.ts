import { Component } from '@angular/core';
import { Profile } from "../reusable-components/profile/profile";
import { Route } from "../reusable-components/route/route";
import { RouteWithStat } from "../reusable-components/route-with-stat/route-with-stat";

@Component({
  selector: 'app-sidebar',
  imports: [Profile, Route, RouteWithStat],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css'
})
export class Sidebar {

}
