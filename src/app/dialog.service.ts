import { Injectable } from '@angular/core';
import {Observable} from "rxjs";

/**
 * Async modal dialog service
 * DialogService makes this app easier to test by faking this service.
 * TODO: better modal implementation that doesn't use window.confirm
 */

@Injectable()
export class DialogService {


  /**
   * Ask user to confirm an action. `message` explains the action and choices.
   * Returns promise resolving to `true`=confirm or `false`=cancel
   */

  confirm(message?: string): Observable<boolean> {
    return Observable.create(function(subscriber) {
      let result = window.confirm(message);
      subscriber.next(result);
      subscriber.complete();
    });
  }

}
