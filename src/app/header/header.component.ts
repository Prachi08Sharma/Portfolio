import { Component } from '@angular/core';
import { ThemeService } from '../theme.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  imports: [CommonModule],
})
export class HeaderComponent {
  menuOpen = false;

  constructor(public themeService: ThemeService) {}

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }

  toggleTheme(): void {
    this.themeService.toggleTheme();
  }

  scrollTo(id: string): void {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      this.menuOpen = false;
    }
  }
}
