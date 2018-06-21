import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardCarasouelComponent } from './dashboard-carasouel.component';

describe('DashboardCarasouelComponent', () => {
  let component: DashboardCarasouelComponent;
  let fixture: ComponentFixture<DashboardCarasouelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardCarasouelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardCarasouelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
