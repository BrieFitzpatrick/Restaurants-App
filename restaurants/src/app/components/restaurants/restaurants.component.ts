import { Component, Input, OnInit } from "@angular/core";
import { Restaurant } from "../../models/restaurants.model";
import { RESTAURANTS } from "src/app/services/restaurants.service";
import { throwIfEmpty } from "rxjs";

@Component({
    selector: 'app-restaurants',
    templateUrl: './restaurants.component.html',
    styleUrls: ['./restaurants.component.scss']
  })
  export class RestaurantsComponent {
    newRestaurant = ''
    Restaurant = RESTAURANTS;

    selectedRestaurant?: Restaurant;
    onSelect(restaurant: Restaurant): void{
      this.selectedRestaurant= restaurant;
    }

    add(newRestaurant:any){
      this.newRestaurant += newRestaurant.target.value;
      this.Restaurant.push(newRestaurant);
    }
  }
  