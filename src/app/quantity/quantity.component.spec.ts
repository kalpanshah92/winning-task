import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuantityComponent } from './quantity.component';

describe('QuantityComponent', () => {
  let component: QuantityComponent;
  let fixture: ComponentFixture<QuantityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuantityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuantityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // Test Cases

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  
  // Test case to make sure quantity is not less than 0
  it('quantity should be grater than 1',() =>{
    expect(component.qty).toBeGreaterThan(0); 
  });

 // Test case for add quantity function 
  it('Add quantity fucntion ',() =>{
    expect(component.addQty).toBeTruthy(); 
  });

  // Test case for subtract quantity function
  it('Sub quantity fucntion ',() =>{
    expect(component.subQty).toBeTruthy(); 
  });
  
});
