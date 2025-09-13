import { Component, Input, input, OnInit } from '@angular/core';

@Component({
  selector: 'app-route',
  imports: [],
  templateUrl: './route.html',
  styleUrl: './route.css'
})
export class Route implements OnInit {
ngOnInit(): void {
  console.log(this.RouteIcon)
}

@Input() RouteLabel!:string
@Input() RouterLink!:string
@Input() RouteIcon!:string



}
