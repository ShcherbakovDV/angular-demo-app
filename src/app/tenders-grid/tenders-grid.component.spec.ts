import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TendersGridComponent } from './tenders-grid.component';

describe('TendersGridComponent', () => {
  let component: TendersGridComponent;
  let fixture: ComponentFixture<TendersGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TendersGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TendersGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
