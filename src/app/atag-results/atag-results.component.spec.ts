import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ATagResultsComponent } from './atag-results.component';

describe('ATagResultsComponent', () => {
  let component: ATagResultsComponent;
  let fixture: ComponentFixture<ATagResultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ATagResultsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ATagResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
