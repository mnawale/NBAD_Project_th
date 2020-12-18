import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateamountComponent } from './updateamount.component';

describe('UpdateamountComponent', () => {
  let component: UpdateamountComponent;
  let fixture: ComponentFixture<UpdateamountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateamountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateamountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
