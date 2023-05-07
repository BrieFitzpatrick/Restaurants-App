import { Component, Input, OnInit } from "@angular/core";
import { Restaurant } from "../../models/restaurants.model";
import { RestaurantsService } from "src/app/services/restaurants.service";
import { RestaurantsComponent } from "../restaurants/restaurants.component";
import { Router } from "@angular/router";
import { ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";
import { Observable} from "rxjs";
import { switchMap } from "rxjs";
@Component({
    selector: 'app-restaurant-details',
    templateUrl: './restaurant-details.component.html',
    styleUrls: ['./restaurant-details.component.scss']
  })
  export class RestaurantDetailsComponent implements OnInit{
    restaurant: Restaurant | undefined;
    id = String(this.route.snapshot.paramMap.get('id'));

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private restaurantService: RestaurantsService,
        private location: Location) {
    }

    ngOnInit(): void {
        this.getRestaurant();
    }

    getRestaurant(): void {
        this.restaurantService.getRestaurant(this.id)
            .subscribe(restaurant => this.restaurant = restaurant);
    }

    goBack(): void {
        this.router.navigate(['/restaurants']);
      }

    delete(){
        this.restaurantService.delete(this.id);
        this.goBack();
    } 

}