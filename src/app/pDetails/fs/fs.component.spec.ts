import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FSComponent } from './fs.component';

describe('FSComponent', () => {
  let component: FSComponent;
  let fixture: ComponentFixture<FSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FSComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
