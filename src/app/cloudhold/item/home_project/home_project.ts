import { Component, OnInit } from '@angular/core';
import { Service } from './home_project.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home-project',
  imports: [CommonModule, FormsModule],
  templateUrl: './home_project.html',
})
export class Home_project implements OnInit {
  id: number | null = 2;
  project_name: string = '';
  images: any[] = [];
  displayedimages: any[] = [];
  currentView: 'grid' | 'list' = 'grid';

  // Pagination
  currentPage: number = 1;
  itemsPerPage: number = 12;
  totalPages: number = 1;

  constructor(
    private service: Service,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.id = Number(params.get('id'));
      this.service.image_project(this.id).subscribe((resp) => {
        this.project_name = resp.name;
        this.images = resp.image;
        this.updateDisplayedimages();
      });
    });
  }
  
  gohome(): void {
    this.router.navigate(['/']);
  }

  toggleView(view: 'grid' | 'list'): void {
    this.currentView = view;

    if (view === 'list') {
      this.itemsPerPage = 20;
    } else {
      this.itemsPerPage = 12;
    }
    this.currentPage = 1;
    this.updateDisplayedimages();
  }
  // อัปเดตข้อมูลที่แสดงตาม pagination
  updateDisplayedimages(): void {
    this.totalPages = Math.ceil(this.images.length / this.itemsPerPage);
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    this.displayedimages = this.images.slice(startIndex, endIndex);
  }

  // การจัดการ pagination
  previousPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.updateDisplayedimages();
    }
  }

  nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.updateDisplayedimages();
    }
  }

  goToPage(page: number): void {
    this.currentPage = page;
    this.updateDisplayedimages();
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
}
