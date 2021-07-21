import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultwritingComponent } from './resultwriting.component';

describe('ResultwritingComponent', () => {
  let component: ResultwritingComponent;
  let fixture: ComponentFixture<ResultwritingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultwritingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultwritingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
