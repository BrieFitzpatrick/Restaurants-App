import { Component, Input, OnInit } from "@angular/core";
import { Restaurant } from "../../models/restaurants.model";
import { RestaurantsService } from "src/app/services/restaurants.service";
import { RestaurantsComponent } from "../restaurants/restaurants.component";
import { Router } from "@angular/router";
import { ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";
@Component({
    selector: 'app-restaurantdetails',
    templateUrl: './restaurantdetails.component.html',
    styleUrls: ['./restaurantdetails.component.scss']
  })
  export class RestaurantDetailsComponent implements OnInit{
    restaurant: Restaurant | undefined;

    constructor(
        private route: ActivatedRoute,
        private restaurantService: RestaurantsService,
        private location: Location) {
    }

    ngOnInit(): void {
        this.getRestaurant();
    }

    getRestaurant(): void {
        const id = String(this.route.snapshot.paramMap.get('id'));
        this.restaurantService.getRestaurant(id)
            .subscribe(Restaurant => this.restaurant = Restaurant);
    }

    goBack(): void {
        this.location.back();
      }

    delete(){
        const id = String(this.route.snapshot.paramMap.get('id'));
        this.restaurantService.delete(id);
    }

    }