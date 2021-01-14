import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { BaseAppComponent } from './base-app.component';

describe('BaseAppComponent', () => {
  let component: BaseAppComponent;
  let fixture: ComponentFixture<BaseAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BaseAppComponent ],
      imports: [RouterTestingModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BaseAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // Test cases

  // Test for checkout function
  it('Checkout function',() =>{
    expect(component.checkout).toBeTruthy(); 
  });

  // Test for continue shopping function
  it('Continue shopping function',() =>{
    expect(component.cancelComp).toBeTruthy(); 
  });

});
