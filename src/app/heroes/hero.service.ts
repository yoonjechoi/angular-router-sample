import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
/**
 * Created by yoonjechoi on 2016. 12. 30..
 */

export class Hero {
  constructor(public id: number, public name: string) {

  }
}

let HEROS = [
  new Hero(11, 'Mr. Nice'),
  new Hero(12, 'Narco'),
  new Hero(13, 'Bombasto'),
  new Hero(14, 'Celeritas'),
  new Hero(15, 'Magneta'),
  new Hero(16, 'RubberMan')
];

@Injectable()
export class HeroService {
  getHeroes() {
    return Observable.create(function(subscriber) {
      subscriber.next(HEROS);
      subscriber.complete()
    });
  }
}
