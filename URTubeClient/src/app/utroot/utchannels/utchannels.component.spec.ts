import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UTChannelsComponent } from './utchannels.component';

describe('UTChannelsComponent', () => {
  let component: UTChannelsComponent;
  let fixture: ComponentFixture<UTChannelsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UTChannelsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UTChannelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
