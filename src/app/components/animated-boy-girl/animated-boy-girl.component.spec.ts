import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimatedBoyGirlComponent } from './animated-boy-girl.component';

describe('AnimatedBoyGirlComponent', () => {
  let component: AnimatedBoyGirlComponent;
  let fixture: ComponentFixture<AnimatedBoyGirlComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AnimatedBoyGirlComponent]
    });
    fixture = TestBed.createComponent(AnimatedBoyGirlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
