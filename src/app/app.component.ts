import { Component } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {DialogboxComponent} from "../app/dialogbox/dialogbox.component"
import { faThumbtack } from '@fortawesome/free-solid-svg-icons'
import { faTasks } from '@fortawesome/free-solid-svg-icons'
import { faTrashAlt} from '@fortawesome/free-solid-svg-icons'



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'board';
  hidden = false;
  pin = faThumbtack;
  tasks = faTasks;
  delete = faTrashAlt;
  constructor(public dialog: MatDialog) {}

  
  openDialog() {
    this.dialog.open(DialogboxComponent);
  }

  
}
