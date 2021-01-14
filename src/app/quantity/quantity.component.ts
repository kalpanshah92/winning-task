import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quantity',
  templateUrl: './quantity.component.html',
  styleUrls: ['./quantity.component.css']
})
export class QuantityComponent implements OnInit {
  qty= 1;

  // Function to reduce quantity
  subQty() {
    if (this.qty > 1)
    {
      this.qty--;
    }
  }

  // Function to add quantity
  addQty(){
    this.qty++;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
