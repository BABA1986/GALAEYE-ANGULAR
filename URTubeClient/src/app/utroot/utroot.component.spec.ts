import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UTRootComponent } from './utroot.component';


describe('UTRootComponent', () => {
  let component: UTRootComponent;
  let fixture: ComponentFixture<UTRootComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UTRootComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UTRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
