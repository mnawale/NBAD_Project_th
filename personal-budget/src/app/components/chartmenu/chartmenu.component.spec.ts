import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartmenuComponent } from './chartmenu.component';

describe('ChartmenuComponent', () => {
  let component: ChartmenuComponent;
  let fixture: ComponentFixture<ChartmenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartmenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
