import { CommonModule } from '@angular/common';
import { Component, input, Input } from '@angular/core';

@Component({
  selector: 'app-route-with-stat',
  imports: [CommonModule],
  templateUrl: './route-with-stat.html',
  styleUrl: './route-with-stat.css'
})
export class RouteWithStat {
@Input() RouteLabel!:string
@Input() RouterLink!:string
@Input() RouteIcon!:string
@Input() RouteStat!:number
}
