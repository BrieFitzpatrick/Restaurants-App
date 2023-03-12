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
    id: number = 0;

    newRestaurant: Restaurant = {id: 0, name: '', rank: 0};

    selectedRestaurant?: Restaurant;
    onSelect(restaurant: Restaurant): void{
      this.selectedRestaurant= restaurant;
    }

    add(newId: number, newName: string, newRank: number){

      this.newRestaurant = {id: newId, name: newName, rank: newRank};
      RESTAURANTS.push(this.newRestaurant);
    }
  
    delete(id: number){
      RESTAURANTS.splice(id-1, 1);
      this.updateids(id);
        }

    updateids(id: number){
      for (let i=id-1; id<RESTAURANTS.length; i++) {
        RESTAURANTS[i].id = i+1;
      }
    }
}
  