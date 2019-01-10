import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import * as fromStore from '../../store/index';
import { selectTrafficLights } from '../../store/traffic-lights/traffic-lights.selectors';
import { ForwardTrafficLights } from '../../store/traffic-lights/traffic-lights.actions';

@Component({
  selector: 'app-traffic-lights',
  templateUrl: './traffic-lights.component.html',
  styleUrls: ['./traffic-lights.component.scss']
})
export class TrafficLightsComponent implements OnInit {
  private lights$: any;
  constructor(private store: Store<fromStore.State>) {
    this.lights$ = this.store.pipe(select(selectTrafficLights));
  }

  ngOnInit() {
    setInterval(() => {
      this.store.dispatch(new ForwardTrafficLights());
    }, 5000);
  }

}
