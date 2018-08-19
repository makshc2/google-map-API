import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';

import { AppComponent } from './app.component';
import { MapsComponent } from './components/maps/maps.component';
import { AppRoutingModule } from './app-routing/app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    MapsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyD0hs3efnZIHiDf00wzVlYEbZTZow5PHTc'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

