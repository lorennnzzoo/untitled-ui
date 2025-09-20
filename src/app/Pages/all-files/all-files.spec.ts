import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllFiles } from './all-files';

describe('AllFiles', () => {
  let component: AllFiles;
  let fixture: ComponentFixture<AllFiles>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllFiles]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllFiles);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
