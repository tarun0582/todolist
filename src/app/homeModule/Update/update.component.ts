import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from '@angular/router';
import { TodoserviceService } from '../services/todoservice.service';
import  Swal  from 'sweetalert2';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
})
export class UpdateComponent implements OnInit {
updateItem() {
throw new Error('Method not implemented.');
}

  updateForm = new FormGroup({
    fruitName:new FormControl(''),
    description:new FormControl(''),
    file:new FormControl(''),
    date:new FormControl(''),
  });
  constructor(private todoData:TodoserviceService,private router:ActivatedRoute) {
  }
  ngOnInit(){
    this.todoData.getCurrentData(this.router.snapshot.params['id']).subscribe((res:any)=>{
        console.log(res);
        this.updateForm = new FormGroup({
            fruitName:new FormControl(res['fruitName']),
            description:new FormControl(res['description']),
            file:new FormControl(''),
            date:new FormControl(res['date']),
          });
    })

  }
  updateitems(){

          this.todoData.updateItems(this.router.snapshot.params['id'],this.updateForm.value).subscribe((res:any)=>{
            this.updateForm.reset();
          })
 

}
}
