import { Component } from '@angular/core';
import { Profile } from "../reusable-components/profile/profile";
import { Route } from "../reusable-components/route/route";

@Component({
  selector: 'app-sidebar',
  imports: [Profile, Route],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css'
})
export class Sidebar {

}
