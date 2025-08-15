import { Component } from '@angular/core';
import { faLightbulb } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CommonModule } from '@angular/common';
import {
  faAngular,
  faNodeJs,
  faJs,
  faCss3Alt,
  faHtml5,
  faGitAlt,
  faDocker,
  faAws,
} from '@fortawesome/free-brands-svg-icons';
import {
  faFeatherAlt,
  faRocket,
  faPlug,
  faLeaf,
  faDatabase,
  faCode,
} from '@fortawesome/free-solid-svg-icons';

const skillIcons = {
  Angular: faAngular,
  NestJS: faFeatherAlt,
  'Node.js': faNodeJs,
  'Express.js': faRocket,
  TypeScript: faCode,
  JavaScript: faJs,
  HTML5: faHtml5,
  CSS3: faCss3Alt,
  MongoDB: faLeaf,
  MySQL: faDatabase,
  Git: faGitAlt,
  Docker: faDocker,
  'REST API': faPlug,
  AWS: faAws,
};

interface Skill {
  name: string;
  icon: any;
  level: number;
  color: string;
}

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [FontAwesomeModule, CommonModule],
  styleUrls: ['./skills.component.css'],
  templateUrl: './skills.component.html',
})
export class SkillsComponent {
  skills: Skill[] = [
    { name: 'Angular', icon: skillIcons.Angular, color: '#DD0031', level: 95 },
    { name: 'NestJS', icon: skillIcons.NestJS, color: '#E0234E', level: 92 },
    {
      name: 'Node.js',
      icon: skillIcons['Node.js'],
      color: '#339933',
      level: 90,
    },
    {
      name: 'Express.js',
      icon: skillIcons['Express.js'],
      color: '#000000',
      level: 85,
    },
    {
      name: 'TypeScript',
      icon: skillIcons.TypeScript,
      color: '#3178C6',
      level: 85,
    },
    {
      name: 'JavaScript',
      icon: skillIcons.JavaScript,
      color: '#F7DF1E',
      level: 85,
    },
    { name: 'HTML5', icon: skillIcons.HTML5, color: '#E34F26', level: 97 },
    { name: 'CSS3', icon: skillIcons.CSS3, color: '#1572B6', level: 96 },
    { name: 'MongoDB', icon: skillIcons.MongoDB, color: '#47A248', level: 87 },
    { name: 'MySQL', icon: skillIcons.MySQL, color: '#4479A1', level: 85 },
    { name: 'Git', icon: skillIcons.Git, color: '#F05032', level: 90 },
    { name: 'Docker', icon: skillIcons.Docker, color: '#2496ED', level: 70 },
    {
      name: 'REST API',
      icon: skillIcons['REST API'],
      color: '#FF6C37',
      level: 90,
    },
    { name: 'AWS', icon: skillIcons.AWS, color: '#FF9900', level: 90 },
  ];

  faBolt = faLightbulb;
}
