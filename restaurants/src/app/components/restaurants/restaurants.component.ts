import { Component, Input, OnInit } from "@angular/core";
import { Restaurant } from "../../models/restaurants.model";
import { throwIfEmpty } from "rxjs";
import { v4 as uuidv4 } from 'uuid';
import { RestaurantsService } from "src/app/services/restaurants.service";
import { RestaurantDetailsComponent } from "../restaurantdetails/restaurant-details.component";
import { Router } from "@angular/router";
import { ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";

@Component({
    selector: 'app-restaurants',
    templateUrl: './restaurants.component.html',
    styleUrls: ['./restaurants.component.scss']
  })

  export class RestaurantsComponent implements OnInit {
    restaurants: {[id: string]: Restaurant} = {};

    constructor(
      private restaurantsService: RestaurantsService,
      private route: ActivatedRoute,
      private location: Location){

      }

    name: string = '' ;
    rank: number = 0;

    newRestaurant: Restaurant = {name: '', rank: 0};

    selectedRestaurant: string = '';
    onSelect(restaurantKey: string): void{
      this.selectedRestaurant = restaurantKey;
    }

    ngOnInit() {
      this.restaurants = this.restaurantsService.getAll();
    }

    add(){
      this.restaurantsService.add(this.name, this.rank);
    }

    delete(){
      this.restaurantsService.delete(this.selectedRestaurant);
        this.selectedRestaurant = '';
      }
    }
  
        
