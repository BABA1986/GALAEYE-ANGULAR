import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UthomesectionComponent } from './uthomesection.component';

describe('UthomesectionComponent', () => {
  let component: UthomesectionComponent;
  let fixture: ComponentFixture<UthomesectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UthomesectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UthomesectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
