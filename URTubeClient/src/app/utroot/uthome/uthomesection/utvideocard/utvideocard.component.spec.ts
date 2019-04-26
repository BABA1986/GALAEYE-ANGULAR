import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UtvideocardComponent } from './utvideocard.component';

describe('UtvideocardComponent', () => {
  let component: UtvideocardComponent;
  let fixture: ComponentFixture<UtvideocardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UtvideocardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UtvideocardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
