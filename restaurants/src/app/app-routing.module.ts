import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RestaurantDetailsComponent } from './components/restaurantdetails/restaurant-details.component';
import { RestaurantEditComponent } from './components/restaurantedit/restaurant-edit/restaurant-edit.component';
import { RestaurantsComponent } from './components/restaurants/restaurants.component';

const routes: Routes = [
  {path: '', redirectTo: '/restaurants', pathMatch: 'full' },
  {path: 'restaurant/:id', component: RestaurantDetailsComponent},
  {path: 'restaurants', component: RestaurantsComponent},
  {path: 'restaurant/:id/edit', component: RestaurantEditComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
