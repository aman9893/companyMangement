import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteEmpListComponent } from './delete-emp-list.component';

describe('DeleteEmpListComponent', () => {
  let component: DeleteEmpListComponent;
  let fixture: ComponentFixture<DeleteEmpListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteEmpListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteEmpListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
