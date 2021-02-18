import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { catchError } from 'rxjs/operators';


@Component({
  selector: 'app-dialogbox',
  templateUrl: './dialogbox.component.html',
  styleUrls: ['./dialogbox.component.css']
})
export class DialogboxComponent implements OnInit {

  allStatus :{} = {};
  arrayStatus :any  = [];

  allCartegory :{} = {};
  arrayCartegory :any  = [];
  error = "" ;
  errInfo  =""; 

  constructor(private http : HttpClient) {

    
    http.get("http://localhost:36152/api/Cartegory").subscribe( result => {

      this.allCartegory = result;
      Object.entries(result).forEach(
        ([key, value]) =>   this.arrayCartegory.push(value)
      );

   

     });

       http.get("http://localhost:36152/api/Status").subscribe( result => {

        this.allStatus = result;
        Object.entries(result).forEach(
          ([key, value]) =>   this.arrayStatus.push(value)
        );
  
       });

       console.log(this.arrayStatus);

  }

  onSubmit(form :NgForm){
     
    this.http.post<any>("http://localhost:36152/api/Tasks", {
      title : form.value.number, 
      description : form.value.description, 
      status:  form.value.status, 
      cartegory: form.value.cartegory
    }).subscribe(result =>{

        console.log(result.statusCode);
        this.errInfo = "New Task Added"; 
        setTimeout(()=>{
          this.errInfo= ""
          this.reloadPage();
          
    
        }, 3000)

        


        
    }, error => {

     
    this.error = error.message;
    this.errInfo = error.statusText; 
    setTimeout(()=>{
      this.errInfo= ""

    }, 3000)
    

     
    })



  }
  reloadPage() {
    window.location.reload();
 }

  ngOnInit(): void {
  }

}
