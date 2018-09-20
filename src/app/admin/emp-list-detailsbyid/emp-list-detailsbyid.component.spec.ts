import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpListDetailsbyidComponent } from './emp-list-detailsbyid.component';

describe('EmpListDetailsbyidComponent', () => {
  let component: EmpListDetailsbyidComponent;
  let fixture: ComponentFixture<EmpListDetailsbyidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpListDetailsbyidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpListDetailsbyidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
