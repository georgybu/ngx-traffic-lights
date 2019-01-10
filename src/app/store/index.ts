import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as fromTrafficLights from './traffic-lights/traffic-lights.reducer';

export interface State {
  trafficLights: fromTrafficLights.State
}

export const reducers: ActionReducerMap<State> = {
  trafficLights: fromTrafficLights.reducer
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
