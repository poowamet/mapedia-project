import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

export interface SidebarItem {
  icon: string;
  label: string;
  route?: string;
  badge?: number;
  isActive?: boolean;
}

@Component({
  selector: 'app-sidebar',
  imports: [CommonModule, RouterModule],
  templateUrl: './sidebar.html',
})
export class Sidebar {
  isCollapsed = false;
  showUpgradeNotification = true;
  menuOpen = true;

  constructor(
    private router: Router
  ) {}

  userInfo = {
    name: 'Mapedia',
    role: 'Basic Member',
    avatar: 'assets/image/mapedia.jpg',
  };

  @HostListener('window:resize', [])
  onResize() {
    if (window.innerWidth >= 1024) {
      this.menuOpen = true;
    }
    if (window.innerWidth < 1024) {
      this.menuOpen = false;
    }
  }

  ngOnInit() {
    this.onResize();
  }

  gohome(): void {
    this.router.navigate(['/']);
  }

  toggleSidebar() {
    this.isCollapsed = !this.isCollapsed;
  }

  dismissUpgrade() {
    this.showUpgradeNotification = false;
  }

  goToPro() {
    // Handle Go Pro action
    console.log('Navigate to Pro upgrade');
    this.showUpgradeNotification = false;
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
}
