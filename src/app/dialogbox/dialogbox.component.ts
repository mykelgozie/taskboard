import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';


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
     

    console.log(form);
    console.log("heyeyey")

  }

  ngOnInit(): void {
  }

}
