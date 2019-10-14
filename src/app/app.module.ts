import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookSummaryItemComponent } from './book-summary-item/book-summary-item.component';
import { BookGalleryComponent } from './book-gallery/book-gallery.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { ShoppingCartEntryComponent } from './shopping-cart-entry/shopping-cart-entry.component';
import { StoreModule } from '@ngrx/store';
import { shoppingCartReducer } from './reducers/shoppingcart.reducer';

@NgModule({
  declarations: [
    AppComponent,
    BookSummaryItemComponent,
    BookGalleryComponent,
    ShoppingCartComponent,
    BookDetailsComponent,
    ShoppingCartEntryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({ shoppingCart: shoppingCartReducer })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
