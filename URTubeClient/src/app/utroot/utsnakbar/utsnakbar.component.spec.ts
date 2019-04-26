import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UtsnakbarComponent } from './utsnakbar.component';

describe('UtsnakbarComponent', () => {
  let component: UtsnakbarComponent;
  let fixture: ComponentFixture<UtsnakbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UtsnakbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UtsnakbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
