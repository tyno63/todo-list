import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArraySizeComponent } from './array-size.component';

describe('ArraySizeComponent', () => {
  let component: ArraySizeComponent;
  let fixture: ComponentFixture<ArraySizeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArraySizeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArraySizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
