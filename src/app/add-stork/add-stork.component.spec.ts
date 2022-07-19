import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddStorkComponent } from './add-stork.component';

describe('AddStorkComponent', () => {
  let component: AddStorkComponent;
  let fixture: ComponentFixture<AddStorkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddStorkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddStorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
