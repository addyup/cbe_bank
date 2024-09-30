import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonsCommonComponent } from './buttons-common.component';

describe('ButtonsCommonComponent', () => {
  let component: ButtonsCommonComponent;
  let fixture: ComponentFixture<ButtonsCommonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonsCommonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonsCommonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
