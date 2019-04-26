import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UTHomeComponent } from './uthome.component';

describe('UTHomeComponent', () => {
  let component: UTHomeComponent;
  let fixture: ComponentFixture<UTHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UTHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UTHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
