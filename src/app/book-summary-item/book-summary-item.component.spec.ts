import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookSummaryItemComponent } from './book-summary-item.component';

import { EmperorsBladesMock } from '../mocks/EmperorsBlades.mock';

describe('BookSummaryItemComponent', () => {
  let component: BookSummaryItemComponent;
  let fixture: ComponentFixture<BookSummaryItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookSummaryItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookSummaryItemComponent);
    component = fixture.componentInstance;
    component.book = EmperorsBladesMock;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
