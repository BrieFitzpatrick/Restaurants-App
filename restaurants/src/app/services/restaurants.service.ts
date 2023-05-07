import { Restaurant } from "../models/restaurants.model";
import { Component } from "@angular/core";
import { v4 as uuidv4 } from 'uuid';
import { Injectable } from "@angular/core";
import { __values } from "tslib";
import { Observable, of } from "rxjs";

@Injectable({
    providedIn: 'root',
})

export class RestaurantsService {

    constructor() {}

    RESTAURANTS: {[id: string]: Restaurant} = {
        '1': { name: 'Broders', rank: 7.9 },
        '2': { name: 'Taqueria y birreria las cuatro', rank: 8.3},
        '3': { name: 'The Luscious Crab', rank: 0.1},
        '4': { name: "Famous Dave's", rank: 0.1},
        '5': { name: 'Fogo de Chao', rank: 0.1},
        '6': { name: 'Demera Ethopian Restaurant', rank: 0.1},
        '7': { name: 'WingStop', rank: 8.9},
        '8': { name: 'MT Noodles', rank: 0.1},
        '9': { name: 'Hmong Village',rank: 0.1},
        '10': { name: 'Gyu-kaku Japanese BBQ', rank: 9.0}
        };

    getAll() {
        return this.RESTAURANTS;
    }

    add(newName: string, newRank: number){
      var newRestaurant = {name: newName, rank: newRank};
      var id: string = uuidv4(); 
      this.RESTAURANTS[id] = newRestaurant;
    }
    
    delete(id: string){
      delete this.RESTAURANTS[id];
    }

    getRestaurant(id: string): Observable<Restaurant> {
        return of(this.RESTAURANTS[id]);
    }
}
