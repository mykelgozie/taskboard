import { Component } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {DialogboxComponent} from "../app/dialogbox/dialogbox.component"
import { faThumbtack } from '@fortawesome/free-solid-svg-icons'
import { faTasks } from '@fortawesome/free-solid-svg-icons'
import { faTrashAlt} from '@fortawesome/free-solid-svg-icons'
import { HttpClient, HttpClientModule } from '@angular/common/http';
import {NgxPaginationModule} from 'ngx-pagination';




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
  errInfo ="";
  error ="";
  pageOfItems: Array<any> = [] ;
  items = [];
  collection :any= [];
  p: number = 1;
  
  constructor(public dialog: MatDialog, private http : HttpClient) {
      for (let index = 0; index < 100; index++) {

        let obje :{} = {'Name': `User Name${index}`, 'id': `UID${index}` }
        this.collection.push(obje);
        
      }
  


    this.http.get('http://localhost:36152/api/Tasks').subscribe(result => {
    
      this.allTasks = result;
     
      Object.entries(result).forEach(
        ([key, value]) =>   this.arrayTask.push(value)
      );

      this.loading = false;
 
    });



  }

  DeleteTask(id:any){

    var answer =  confirm("Are Sure You Want To Delete this Task");

    if(answer){

      console.log(id);

      this.http.delete<any>("http://localhost:36152/api/Tasks/"+ id).subscribe(result =>{

        console.log(result.statusCode);
   
        this.errInfo = " Task Added Deleted"; 
        setTimeout(()=>{
          this.errInfo= ""
    
        }, 3000)
        
    }, error => {

     
    this.error = error.message;
    this.errInfo = error.statusText; 
    setTimeout(()=>{
      this.errInfo= ""

    }, 3000)
    

     
    })

      
    }
     alert(answer);
    
  }

  openDialog() {
    this.dialog.open(DialogboxComponent);
  }

  
}
