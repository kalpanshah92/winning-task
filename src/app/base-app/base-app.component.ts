import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-base-app',
  templateUrl: './base-app.component.html',
  styleUrls: ['./base-app.component.css'],
})
export class BaseAppComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  // function to close component
  cancelComp() {
    this.router.navigate(['/']);
  }
  // function to navigate user to checkout page
  checkout() {
    this.router.navigate(['/checkout']);
  }
}
