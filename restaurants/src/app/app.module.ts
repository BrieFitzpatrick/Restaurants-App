import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { APP_BASE_HREF } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RestaurantsComponent } from './components/restaurants/restaurants.component';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { RestaurantDetailsComponent } from './components/restaurantdetails/restaurant-details.component';


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
  providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
