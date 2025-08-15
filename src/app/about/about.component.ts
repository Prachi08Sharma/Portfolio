import { Component } from '@angular/core';
import { about } from '../data';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [FontAwesomeModule],
  styleUrls: ['./about.component.css'],
  templateUrl: './about.component.html',
})
export class AboutComponent {
  about = about;
  faInfoCircle = faInfoCircle;
}
