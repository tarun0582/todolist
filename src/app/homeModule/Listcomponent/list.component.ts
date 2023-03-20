import { Component } from '@angular/core';
import { TodoserviceService } from '../services/todoservice.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
})

export class ListComponent {
    items:any=[]
     constructor(private todoData :TodoserviceService){
     this.todoData.viewItems().subscribe((res:any)=>{
     this.items=res;
    })

  }
    view(data:any){
        Swal.fire({
            title: "fruit Name "+data.fruitName,
            text: data.description + data.date,
            imageUrl: data.file,
            imageWidth: 400,
            imageHeight: 200,
            imageAlt: 'Custom image',
          })

    }
    edit(data:any){
        
    }
delete(data:any) {
    Swal.fire({
        title: 'Are you sure?',
        text: data.fruitName,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
            console.log(data.id)
        this.todoData.deleteItems(data.id).subscribe((res:any)=>{
            this.todoData.viewItems().subscribe((res:any)=>{
                this.items=res;
            })
        })
          Swal.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          )
        }
      })
}

}
