import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quantity',
  templateUrl: './quantity.component.html',
  styleUrls: ['./quantity.component.css']
})
export class QuantityComponent implements OnInit {
  qty= 1;

  subQty() {
    if (this.qty > 1)
    {
      this.qty--;
    }
  }

  addQty(){
    this.qty++;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
