import { Component, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Cloudhold } from './cloudhold/cloudhold';
import { NotificationService } from './notification.service';
import { CommonModule } from '@angular/common';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-root',
  imports: [
    Cloudhold,
    CommonModule
  ],
  templateUrl: './app.html',
  styleUrl: './app.css',
  animations: [
    trigger('badgeMove', [
      transition('* => *', [
        style({ transform: 'translateY(-10px)', opacity: 0.7 }),
        animate('200ms', style({ transform: 'translateY(0)', opacity: 1 }))
      ])
    ])
  ]
})
export class App implements OnInit {
  protected readonly title = signal('mapedia-project');
  isMobileMenuOpen = false;
  notificationCount_bell = 0;
  notificationCount_mail = 0;

  constructor(
    private notificationService: NotificationService
  ) {}

  ngOnInit() {
    this.notificationService.getMessages(1).subscribe((num) => {
      this.notificationCount_bell = num;
    });
    this.notificationService.getMessages(2).subscribe((num) => {
      this.notificationCount_mail = num;
    });
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  closeMobileMenu() {
    this.isMobileMenuOpen = false;
  }
}
