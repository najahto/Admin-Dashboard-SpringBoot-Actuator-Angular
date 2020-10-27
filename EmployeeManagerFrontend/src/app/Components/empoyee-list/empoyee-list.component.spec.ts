import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpoyeeListComponent } from './empoyee-list.component';

describe('EmpoyeeListComponent', () => {
  let component: EmpoyeeListComponent;
  let fixture: ComponentFixture<EmpoyeeListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpoyeeListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpoyeeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
