import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UtaddcategorydialogueComponent } from './utaddcategorydialogue.component';

describe('UtaddcategorydialogueComponent', () => {
  let component: UtaddcategorydialogueComponent;
  let fixture: ComponentFixture<UtaddcategorydialogueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UtaddcategorydialogueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UtaddcategorydialogueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
