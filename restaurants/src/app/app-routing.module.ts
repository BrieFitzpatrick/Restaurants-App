import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RestaurantDetailsComponent } from './components/restaurantdetails/restaurantdetails.component';
import { RestaurantsComponent } from './components/restaurants/restaurants.component';

const routes: Routes = [
  {path: 'restaurant/:id', component: RestaurantDetailsComponent},
  {path: 'restaurants', component: RestaurantsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
