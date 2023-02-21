import { Component } from "@angular/core";
import { Restaurant } from "../../models/restaurants.model";
import { RESTAURANTS } from "src/app/services/restaurants.service";

@Component({
    selector: 'app-restaurants',
    templateUrl: './restaurants.component.html',
    styleUrls: ['./restaurants.component.scss']
  })
  export class RestaurantsComponent {
    Restaurant = RESTAURANTS;
  }
  