import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
})
export class HeaderComponent {

    constructor(private routes: Router) {

    }
    home() {
        this.routes.navigateByUrl('/home')
    }
    addItems() {
        this.routes.navigateByUrl("/home/add")
    }
    viewItems() {
        this.routes.navigateByUrl("/home/list")
    }
    title = 'todolist';
}
