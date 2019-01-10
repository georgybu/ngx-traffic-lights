import { createSelector } from '@ngrx/store';
import * as fromStore from '../index';

export const selectTrafficLights = (state: fromStore.State) => state.trafficLights;
