import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Folder100 } from './folder-100';

describe('Folder100', () => {
  let component: Folder100;
  let fixture: ComponentFixture<Folder100>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Folder100]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Folder100);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
