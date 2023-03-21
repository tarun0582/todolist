import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from '@angular/router';
import { TodoserviceService } from '../services/todoservice.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
})
export class UpdateComponent implements OnInit {
  constructor(private todoData: TodoserviceService, private router: ActivatedRoute,private routes:Router) {
  }
  updateItem() {
    Swal.fire({
      title: 'Do you want to save the changes?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Save',
      denyButtonText: `Don't save`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        console.log(this.router.snapshot.params['id'])
        this.todoData.updateItems(this.router.snapshot.params['id'], this.updateForm.value).subscribe((res: any) => {
          console.log(this.router.snapshot.params['id'])
          this.updateForm.reset();
        })
        Swal.fire('Update!', '', 'success')
        this.routes.navigateByUrl("/home/list")
      } else if (result.isDenied) {
        Swal.fire('Changes are not saved', '', 'info')
      }
    })
  }
  updateForm = new FormGroup({
    fruitName: new FormControl(''),
    description: new FormControl(''),
    file: new FormControl(''),
    date: new FormControl(''),
  });
 
  ngOnInit() {
    this.todoData.getCurrentData(this.router.snapshot.params['id']).subscribe((res: any) => {
      this.updateForm = new FormGroup({
        fruitName: new FormControl(res['fruitName']),
        description: new FormControl(res['description']),
        file: new FormControl(res['file']),
        date: new FormControl(res['date']),
      });
    })

  }
}
