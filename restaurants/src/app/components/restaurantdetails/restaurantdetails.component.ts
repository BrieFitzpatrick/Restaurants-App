import { Component, Input, OnInit } from "@angular/core";
import { Restaurant } from "../../models/restaurants.model";
import { RestaurantsService } from "src/app/services/restaurants.service";
import { RestaurantsComponent } from "../restaurants/restaurants.component";

@Component({
    selector: 'app-restaurantdetails',
    templateUrl: './restaurantdetails.component.html',
    styleUrls: ['./restaurantdetails.component.scss']
  })
  export class RestaurantDetailsComponent {
    constructor(private restaurantsService: RestaurantsService){}
    restaurants: {[id: string]: Restaurant} = {};
  }