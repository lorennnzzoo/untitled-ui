import { Component } from '@angular/core';
import { Sidebar } from "../../sidebar/sidebar";
import { Footer } from "../../footer/footer";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-main',
  imports: [Sidebar, RouterOutlet],
  templateUrl: './main.html',
  styleUrl: './main.css'
})
export class Main {

}
