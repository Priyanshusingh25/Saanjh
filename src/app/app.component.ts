import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// import { MenWearComponent } from './men-wear/men-wear.component';
// import { WomenWearComponent } from './women-wear/women-wear.component';
// import { TopCollectionsComponent } from './top-collections/top-collections.component';
// import { ProfileComponent } from './profile/profile.component';
import { RouterLink, RouterLinkActive, RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ RouterOutlet ,RouterLink, RouterLinkActive, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'saanjh';
}
