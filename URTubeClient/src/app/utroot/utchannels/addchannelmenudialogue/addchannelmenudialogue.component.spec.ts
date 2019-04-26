import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddchannelmenudialogueComponent } from './addchannelmenudialogue.component';

describe('AddchannelmenudialogueComponent', () => {
  let component: AddchannelmenudialogueComponent;
  let fixture: ComponentFixture<AddchannelmenudialogueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddchannelmenudialogueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddchannelmenudialogueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
