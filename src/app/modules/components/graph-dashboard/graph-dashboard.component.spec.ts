import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphDashboardComponent } from './graph-dashboard.component';

describe('GraphDashboardComponent', () => {
  let component: GraphDashboardComponent;
  let fixture: ComponentFixture<GraphDashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GraphDashboardComponent]
    });
    fixture = TestBed.createComponent(GraphDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
