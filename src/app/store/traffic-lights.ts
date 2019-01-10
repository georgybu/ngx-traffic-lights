import {Action} from '@ngrx/store';

export interface State {
  states: any;
  currentStateId: string;
}

enum Light { ON = 'on', OFF = 'off', BLINK = 'blink'}

const states = {
  'stop': {red: Light.ON, yellow: Light.OFF, green: Light.OFF, nextState: 'stopAttention'},
  'stopAttention': {red: Light.ON, yellow: Light.ON, green: Light.OFF, nextState: 'go'},
  'go': {red: Light.OFF, yellow: Light.OFF, green: Light.ON, nextState: 'goAttention'},
  'goAttention': {red: Light.OFF, yellow: Light.ON, green: Light.OFF, nextState: 'stop'},
  'faulty': {red: Light.OFF, yellow: Light.BLINK, green: Light.OFF, nextState: 'faulty'},
};

const initialState: State = {states, currentStateId: 'stop'};

enum actionTypes {
  NextTrafficLightState = '[TrafficLights] Set TrafficLights'
}

// Action
export class SetNextTrafficLightState implements Action {
  readonly type = actionTypes.NextTrafficLightState;
}

// Reducer
export function reducer(state = initialState, action): State {
  switch (action.type) {
    case actionTypes.NextTrafficLightState:
      const currentStateId = state.states[state.currentStateId].nextState;
      return {...state, currentStateId};
    default:
      return state;
  }
}

// Selector
export const getCurrentState = (state: { [key: string]: State }) => state.trafficLight.states[state.trafficLight.currentStateId];
