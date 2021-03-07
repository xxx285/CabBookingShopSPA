import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CabtypeEditComponent } from './cabtype-edit.component';

describe('CabtypeEditComponent', () => {
  let component: CabtypeEditComponent;
  let fixture: ComponentFixture<CabtypeEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CabtypeEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CabtypeEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
