import { Component } from '@angular/core';
import { profile } from '../data';

@Component({
  selector: 'app-hero',
  standalone: true,
  styleUrls: ['./hero.component.css'],
  templateUrl: './hero.component.html',
})
export class HeroComponent {
  profile = profile;
}
