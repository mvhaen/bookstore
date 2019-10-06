import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingCartEntryComponent } from './shopping-cart-entry.component';

import { EmperorsBladesShoppingCartItemMock } from '../mocks/EmperorsBladesShoppingCartItem.mock';

describe('ShoppingCartEntryComponent', () => {
  let component: ShoppingCartEntryComponent;
  let fixture: ComponentFixture<ShoppingCartEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShoppingCartEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppingCartEntryComponent);
    component = fixture.componentInstance;
    component.item = EmperorsBladesShoppingCartItemMock;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
