import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DVComponent } from './dv.component';

describe('DVComponent', () => {
  let component: DVComponent;
  let fixture: ComponentFixture<DVComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DVComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DVComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
