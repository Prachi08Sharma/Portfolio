import { Component } from '@angular/core';
import { experience } from '../data';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faBriefcase,
  faUserTie,
  faBriefcaseClock,
} from '@fortawesome/free-solid-svg-icons';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [FontAwesomeModule, CommonModule],
  styleUrls: ['./experience.component.css'],
  templateUrl: './experience.component.html',
})
export class ExperienceComponent {
  experience = experience;
  companyIcons: any = {
    Wipro: faBriefcase,
    'Freelance Web Developer': faUserTie,
  };
  faWork = faBriefcaseClock;
}
