import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Cloudhold } from './cloudhold/cloudhold';

@Component({
  selector: 'app-root',
  imports: [
    Cloudhold
  ],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('mapedia-project');
  isMobileMenuOpen = false;

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  closeMobileMenu() {
    this.isMobileMenuOpen = false;
  }
}
