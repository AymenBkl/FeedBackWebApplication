import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeadbackComponent } from './feadback.component';

describe('FeadbackComponent', () => {
  let component: FeadbackComponent;
  let fixture: ComponentFixture<FeadbackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeadbackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeadbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
