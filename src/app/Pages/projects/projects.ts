import { Component } from '@angular/core';
import { Folder } from "../../assets/svgs/folder/folder";
import { Folder100 } from "../../assets/svgs/folder-100/folder-100";

@Component({
  selector: 'app-projects',
  imports: [Folder, Folder100],
  templateUrl: './projects.html',
  styleUrl: './projects.css'
})
export class Projects {

}
