import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChannelCatTabComponent } from './channel-cat-tab.component';

describe('ChannelCatTabComponent', () => {
  let component: ChannelCatTabComponent;
  let fixture: ComponentFixture<ChannelCatTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChannelCatTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChannelCatTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
