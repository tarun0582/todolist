import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from '@angular/router';
import { TodoserviceService } from '../services/todoservice.service';
import  Swal  from 'sweetalert2';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
})
export class AddComponent {

  addForm = new FormGroup({
    fruitName:new FormControl(''),
    description:new FormControl(''),
    file:new FormControl(''),
    date:new FormControl(''),
  });
  constructor(private todoData:TodoserviceService) {
  }
  additems(){
    Swal.fire({
        title: 'Do you want to save the changes?',
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: 'Save',
        denyButtonText: `Don't save`,
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire('Saved!', '', 'success')
          this.todoData.addItems(this.addForm.value).subscribe((res:any)=>{
            this.addForm.reset();
          })
        } else if (result.isDenied) {
          Swal.fire('Changes are not saved', '', 'info')
        }
      })
  }

}
