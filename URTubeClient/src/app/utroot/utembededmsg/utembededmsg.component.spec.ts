import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UtembededmsgComponent } from './utembededmsg.component';

describe('UtembededmsgComponent', () => {
  let component: UtembededmsgComponent;
  let fixture: ComponentFixture<UtembededmsgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UtembededmsgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UtembededmsgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
