import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RadAcordianComponent } from './rad-acordian.component';

describe('RadAcordianComponent', () => {
  let component: RadAcordianComponent;
  let fixture: ComponentFixture<RadAcordianComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RadAcordianComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RadAcordianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
