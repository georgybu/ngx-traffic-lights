import { Action } from '@ngrx/store';
import { TrafficLightsActionTypes, TrafficLightsActions } from './traffic-lights.actions';


export interface State {
  isRed: boolean;
  isYellow: boolean;
  isGreen: boolean;
}

export const initialState: State = {
  isRed: true,
  isYellow: false,
  isGreen: false
};

export function reducer(state = initialState, action: TrafficLightsActions): State {
  switch (action.type) {
    case TrafficLightsActionTypes.SetTrafficLights: {
      return { ...state, ...action.payload };
    }
    default:
      return state;
  }
}
