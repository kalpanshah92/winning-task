import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-product-desc',
  templateUrl: './product-desc.component.html',
  styleUrls: ['./product-desc.component.css']
})
export class ProductDescComponent implements OnInit {

  productDesc = {
    desc: "Bosh 8.5kg Front Load White Washing Machine", 
    barCode: "WAW28462AU" , 
    price:918,
    freeDelivery: true 
  }
  




  constructor() { }

  ngOnInit(): void {
    
  }

}
