import { Component, Input, input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-route',
  imports: [CommonModule],
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
@Input() Active:boolean=false;



}
