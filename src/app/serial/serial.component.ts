import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {CommonModule} from '@angular/common';
import {ApiService, ImageInfo} from '../api.service';

@Component({
  selector: 'app-serial',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './serial.component.html',
  styleUrls: ['./serial.component.scss']
})
export class SerialComponent implements OnInit {
  serialNumber: string | null = null;
  images: ImageInfo[] = [];
  loading = false;
  error = '';

  constructor(private route: ActivatedRoute, private apiService: ApiService) {
  }


  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.serialNumber = params.get('serial');
      console.log('Serial Number:', this.serialNumber);
    });
    this.fetchImages();
  }

  fetchImages() {
    this.loading = true;
    // Fetch 12 images from page 1
    this.apiService.getData().subscribe({
      next: (response) => {
        this.images = response;
        this.loading = false;
      },
      error: (error) => {
        this.error = 'Failed to load images: ' + error.message;
        this.loading = false;
      }
    });
  }

  handleImageError(event: any) {
    // Replace broken image with a placeholder
    event.target.src = 'https://via.placeholder.com/300x200?text=Image+Not+Found';
  }
}
