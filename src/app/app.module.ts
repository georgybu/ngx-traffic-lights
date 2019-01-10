import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {StoreModule} from '@ngrx/store';

import {AppComponent} from './app.component';
import {TrafficLightsComponent} from './featured/traffic-lights/traffic-lights.component';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {reducer} from './store/traffic-lights';

@NgModule({
  declarations: [
    AppComponent,
    TrafficLightsComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({trafficLight: reducer}),
    StoreDevtoolsModule.instrument()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
