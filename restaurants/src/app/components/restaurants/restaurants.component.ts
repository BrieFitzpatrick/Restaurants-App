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
    Restaurant = RESTAURANTS;
    name: string = '' ;
    rank: number = 0;
    index: number = 0;

    newRestaurant: Restaurant = {name: '', rank: 0};

    selectedRestaurant?: Restaurant;
    onSelect(restaurant: Restaurant): void{
      this.selectedRestaurant= restaurant;
    }

    add(newName: string, newRank: number){

      this.newRestaurant = {name: newName, rank: newRank};
      RESTAURANTS.push(this.newRestaurant);
    }
  
    delete(selectedRestaurant: Restaurant){
      for(let i=0; i<RESTAURANTS.length; i++){
        if(RESTAURANTS[i] === selectedRestaurant){
          RESTAURANTS.splice(i, 1);
        }
     }
    }
}
  