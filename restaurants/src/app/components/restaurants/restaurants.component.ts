import { Component, Input, OnInit } from "@angular/core";
import { Restaurant } from "../../models/restaurants.model";
import { throwIfEmpty } from "rxjs";
import { v4 as uuidv4 } from 'uuid';
import { RestaurantsService } from "src/app/services/restaurants.service";

@Component({
    selector: 'app-restaurants',
    templateUrl: './restaurants.component.html',
    styleUrls: ['./restaurants.component.scss']
  })
  export class RestaurantsComponent implements OnInit {
    constructor(private restaurantsService: RestaurantsService){}
    restaurants: {[id: string]: Restaurant} = {};

    name: string = '' ;
    rank: number = 0;
    id: number = 0;

    newRestaurant: Restaurant = { name: '', rank: 0};

    selectedRestaurant?: string;
    onSelect(restaurantKey: string): void{
      this.selectedRestaurant = restaurantKey;
    }
    ngOnInit() {
      this.restaurants = this.restaurantsService.getAll();
    }

    add(name: string, rank: number){
      this.restaurantsService.add(name, rank);
    }

    delete(restaurantKey: string){
      this.restaurantsService.delete(restaurantKey);
      if(this.selectedRestaurant === restaurantKey){
        this.selectedRestaurant = '';
      }

    }
    //TODO: add constructor and inject service
}
  