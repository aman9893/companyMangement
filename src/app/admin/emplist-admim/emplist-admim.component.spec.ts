import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmplistAdmimComponent } from './emplist-admim.component';

describe('EmplistAdmimComponent', () => {
  let component: EmplistAdmimComponent;
  let fixture: ComponentFixture<EmplistAdmimComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmplistAdmimComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmplistAdmimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
