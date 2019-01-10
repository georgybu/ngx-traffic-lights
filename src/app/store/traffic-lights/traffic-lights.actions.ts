import { Action } from '@ngrx/store';

export enum TrafficLightsActionTypes {
  SetTrafficLights = '[TrafficLights] Set TrafficLights',
  ForwardTrafficLights = '[TrafficLights] Forward TrafficLights',
  BackwardTrafficLights = '[TrafficLights] Backward TrafficLights'
}

export class SetTrafficLights implements Action {
  readonly type = TrafficLightsActionTypes.SetTrafficLights;
  constructor(public payload: any) { }
}

export class ForwardTrafficLights implements Action {
  readonly type = TrafficLightsActionTypes.ForwardTrafficLights;
}

export class BackwardTrafficLights implements Action {
  readonly type = TrafficLightsActionTypes.BackwardTrafficLights;
}

export type TrafficLightsActions = SetTrafficLights | ForwardTrafficLights | BackwardTrafficLights;
