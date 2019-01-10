import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action, Store, select } from '@ngrx/store';
import { EMPTY, Observable, of } from 'rxjs';
import { switchMap, withLatestFrom } from 'rxjs/operators';
import { TrafficLightsActionTypes, SetTrafficLights } from './traffic-lights.actions';
import * as fromStore from '../index';
import { selectTrafficLights } from './traffic-lights.selectors';

@Injectable()
export class TrafficLightsEffects {

  constructor(private actions$: Actions, private store: Store<fromStore.State>) { }

  @Effect()
  ForwardTrafficLights$: Observable<Action> = this.actions$.pipe(
    ofType(TrafficLightsActionTypes.ForwardTrafficLights),
    withLatestFrom(this.store.pipe(select(selectTrafficLights))),
    switchMap(([action, trafficLights]) => {
      const { isRed, isYellow, isGreen } = trafficLights;
      if (isRed && !isYellow) {
        return of(new SetTrafficLights({
          isRed: true,
          isYellow: true,
          isGreen: false
        }));
      } else if (isRed && isYellow) {
        return of(new SetTrafficLights({
          isRed: false,
          isYellow: false,
          isGreen: true
        }));
      } else if (isGreen) {
        return of(new SetTrafficLights({
          isRed: false,
          isYellow: true,
          isGreen: false
        }));
      } else if (isYellow) {
        return of(new SetTrafficLights({
          isRed: true,
          isYellow: false,
          isGreen: false
        }));
      }
      return EMPTY;
    }));
}
