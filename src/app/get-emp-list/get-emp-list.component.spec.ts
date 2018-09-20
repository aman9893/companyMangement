import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetEmpListComponent } from './get-emp-list.component';

describe('GetEmpListComponent', () => {
  let component: GetEmpListComponent;
  let fixture: ComponentFixture<GetEmpListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetEmpListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetEmpListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
