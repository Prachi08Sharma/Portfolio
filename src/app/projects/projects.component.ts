import { Component } from '@angular/core';
import { projects } from '../data';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faProjectDiagram } from '@fortawesome/free-solid-svg-icons';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [FontAwesomeModule, CommonModule],
  styleUrls: ['./projects.component.css'],
  templateUrl: './projects.component.html',
})
export class ProjectsComponent {
  projects = projects;
  faProjectDiagram = faProjectDiagram;
}
