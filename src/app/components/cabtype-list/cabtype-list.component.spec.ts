import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CabtypeListComponent } from './cabtype-list.component';

describe('CabtypeListComponent', () => {
  let component: CabtypeListComponent;
  let fixture: ComponentFixture<CabtypeListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CabtypeListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CabtypeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
