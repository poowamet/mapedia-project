import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Service } from './home.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './home.html',
})
export class Home implements OnInit {
  projects: any[] = [];
  displayedProjects: any[] = [];
  currentView: 'grid' | 'list' = 'grid';

  // Pagination
  currentPage: number = 1;
  itemsPerPage: number = 12;
  totalPages: number = 1;

  constructor(
    private service: Service,
    private router: Router
  ) {

  }

  ngOnInit(): void {
    this.service.data_project().subscribe((resp) => {
      this.projects = resp;
      this.updateDisplayedProjects()
    });
  }
  selectProject(project: any): void {
    this.router.navigate(['/project', project.id]);
  }

  toggleView(view: 'grid' | 'list'): void {
    this.currentView = view;

    if (view === 'list') {
      this.itemsPerPage = 20;
    } else {
      this.itemsPerPage = 12;
    }
    this.currentPage = 1;
    this.updateDisplayedProjects();
  }
  // อัปเดตข้อมูลที่แสดงตาม pagination
  updateDisplayedProjects(): void {
    this.totalPages = Math.ceil(this.projects.length / this.itemsPerPage);
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    this.displayedProjects = this.projects.slice(startIndex, endIndex);
  }

  // การจัดการ pagination
  previousPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.updateDisplayedProjects();
    }
  }

  nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.updateDisplayedProjects();
    }
  }

  goToPage(page: number): void {
    this.currentPage = page;
    this.updateDisplayedProjects();
  }

  getPageNumbers(): number[] {
    const pages = [];
    const maxVisiblePages = 5;
    let startPage = Math.max(
      1,
      this.currentPage - Math.floor(maxVisiblePages / 2)
    );
    let endPage = Math.min(this.totalPages, startPage + maxVisiblePages - 1);

    // ปรับ startPage ถ้า endPage ไม่ครบ maxVisiblePages
    if (endPage - startPage + 1 < maxVisiblePages) {
      startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }

    return pages;
  }
  trackByPage(index: number, item: number): number {
    return item;
  }
}
