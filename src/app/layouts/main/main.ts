import { Component, Signal } from '@angular/core';
import { Sidebar } from "../../sidebar/sidebar";
import { Footer } from "../../footer/footer";
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-main',
  imports: [Sidebar, RouterOutlet,CommonModule],
  templateUrl: './main.html',
  styleUrl: './main.css'
})
export class Main {
  isSidebarOpen:boolean = false;

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }
}
