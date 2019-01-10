import {Component, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {getCurrentState, SetNextTrafficLightState, State} from '../../store/traffic-lights';

@Component({
  selector: 'app-traffic-lights',
  templateUrl: './traffic-lights.component.html',
  styleUrls: ['./traffic-lights.component.scss']
})
export class TrafficLightsComponent implements OnInit {
  public trafficLightState$: any;

  constructor(private store: Store<State>) {
    this.trafficLightState$ = this.store.pipe(select(getCurrentState));
  }

  ngOnInit() {
    setInterval(() => this.store.dispatch(new SetNextTrafficLightState()), 2000);
  }
}
