import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private isDarkTheme = true;

  constructor() {
    const saved = localStorage.getItem('theme');
    this.isDarkTheme = saved ? JSON.parse(saved) : true;
    this.applyTheme();
  }

  toggleTheme(): void {
    this.isDarkTheme = !this.isDarkTheme;
    localStorage.setItem('theme', JSON.stringify(this.isDarkTheme));
    this.applyTheme();
  }

  isDark(): boolean {
    return this.isDarkTheme;
  }

  private applyTheme(): void {
    if (this.isDarkTheme) {
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
    }
  }
}
