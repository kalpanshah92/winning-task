import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router"

@Component({
  selector: 'app-base-app',
  templateUrl: './base-app.component.html',
  styleUrls: ['./base-app.component.css']
})
export class BaseAppComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  cancelComp() {
    this.router.navigate(['/']);
  }

  checkout() {
    this.router.navigate(['/checkout']);
  }

}
