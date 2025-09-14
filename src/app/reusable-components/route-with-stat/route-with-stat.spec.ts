import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteWithStat } from './route-with-stat';

describe('RouteWithStat', () => {
  let component: RouteWithStat;
  let fixture: ComponentFixture<RouteWithStat>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouteWithStat]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RouteWithStat);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
