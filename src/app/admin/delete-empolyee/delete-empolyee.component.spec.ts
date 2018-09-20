import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteEmpolyeeComponent } from './delete-empolyee.component';

describe('DeleteEmpolyeeComponent', () => {
  let component: DeleteEmpolyeeComponent;
  let fixture: ComponentFixture<DeleteEmpolyeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteEmpolyeeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteEmpolyeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
