import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  styles: [`
    agm-map {
      height: 100vh;
    }
  `],
  template: `
  <agm-map [latitude]="lat" [longitude]="lng"></agm-map>
  `
})
export class AppComponent {
  lat = 51.678418;
  lng = 7.809007;
}
