import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedTableComponent } from './featured-table.component';

describe('FeaturedTableComponent', () => {
  let component: FeaturedTableComponent;
  let fixture: ComponentFixture<FeaturedTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeaturedTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeaturedTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
