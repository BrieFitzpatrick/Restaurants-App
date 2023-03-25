import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RestaurantsComponent } from './components/restaurants/restaurants.component';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { RestaurantDetailsComponent } from './components/restaurantdetails/restaurantdetails.component';


@NgModule({
  declarations: [
    AppComponent,
    RestaurantsComponent,
    RestaurantDetailsComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
