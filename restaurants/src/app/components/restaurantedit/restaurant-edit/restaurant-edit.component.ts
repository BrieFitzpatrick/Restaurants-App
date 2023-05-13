import { Component, Input, OnInit } from "@angular/core";
import { RestaurantsService } from "src/app/services/restaurants.service";
import { Router } from "@angular/router";
import { ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common"
import { Restaurant } from "src/app/models/restaurants.model";
import { VERSION } from "@angular/forms";


@Component({
  selector: 'app-restaurant-edit',
  templateUrl: './restaurant-edit.component.html',
  styleUrls: ['./restaurant-edit.component.scss']
})
export class RestaurantEditComponent implements OnInit {
  restaurant: Restaurant | undefined;
  id: string = '';
  
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private restaurantService: RestaurantsService,
    private location: Location) {
  }

  ngOnInit(): void {
    this.id = String(this.route.snapshot.paramMap.get('id'));
    this.getRestaurant();
  }

  getRestaurant(): void {
    this.restaurantService.getRestaurant(this.id)
        .subscribe(restaurant => this.restaurant = restaurant);
        console.log(this.id);
  }
  save(name: string, rank: number): void {
    this.restaurantService.updateRestaurant(this.id, name, rank)
    this.cancel();
  }

  cancel(): void {
    this.router.navigate([`/restaurant/${this.id}`]);
  }

}
