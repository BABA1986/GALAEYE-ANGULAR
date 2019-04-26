import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UtaddvideodialogueComponent } from './utaddvideodialogue.component';

describe('UtaddvideodialogueComponent', () => {
  let component: UtaddvideodialogueComponent;
  let fixture: ComponentFixture<UtaddvideodialogueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UtaddvideodialogueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UtaddvideodialogueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
