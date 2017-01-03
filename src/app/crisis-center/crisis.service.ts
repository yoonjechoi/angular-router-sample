import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
/**
 * Created by yoonjechoi on 2017. 1. 3..
 */

export class Crisis {
  constructor(public id: number,
              public name: string) {

  }
}

const CRISES = [
  new Crisis(1, 'Dragon Burning Cities'),
  new Crisis(2, 'Sky Rains Great White Sharks'),
  new Crisis(3, 'Asteroid Heading For Earth'),
  new Crisis(4, 'Procrastinators Meeting Delayed Again'),
];

@Injectable()
export class CrisisService {
  static nextCrisisId = 100;

  getCrises(): Observable<Crisis[]> {
    return Observable.create(function(subscriber) {
      subscriber.next(CRISES);
      subscriber.complete();
    });
  }

  getCrisis(id: number| string): Observable<Crisis> {
    return Observable.create(function(subscriber) {
      subscriber.next(CRISES.find(crisis => crisis.id === +id))
      subscriber.complete();
    });
  }

  addCrisis(name: string): Observable<number> {
    name = name.trim();
    if(name) {
      let crisis = new Crisis(CrisisService.nextCrisisId++, name);
      return Observable.create(function(subscriber) {
        subscriber.next(CRISES.push(crisis));
        subscriber.complete();
      });
    }
  }
}
