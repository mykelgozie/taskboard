import { Component } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {DialogboxComponent} from "../app/dialogbox/dialogbox.component"
import { faThumbtack } from '@fortawesome/free-solid-svg-icons'
import { faTasks } from '@fortawesome/free-solid-svg-icons'
import { faTrashAlt} from '@fortawesome/free-solid-svg-icons'
import { HttpClient, HttpClientModule } from '@angular/common/http';




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
  loading:boolean = true;
  allTasks :{} ={};
  arrayTask :any = [];
  allStatus :{} = {};
  arrayStatus :any  = [];
  
  constructor(public dialog: MatDialog, private http : HttpClient) {

  


    this.http.get('http://localhost:36152/api/Tasks').subscribe(result => {
    
      this.allTasks = result;
     
      Object.entries(result).forEach(
        ([key, value]) =>   this.arrayTask.push(value)
      );
     


  
      this.loading = false;
  
    
  
      
    });



  }
  
     
 


  
  openDialog() {
    this.dialog.open(DialogboxComponent);
  }

  
}
