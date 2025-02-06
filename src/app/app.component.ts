import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass'
})
export class AppComponent implements OnInit {
  serialNumber: string | null = null;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.serialNumber = this.route.snapshot.paramMap.get('serial');
    console.log('Serial Number:', this.serialNumber);
  }
  title = 'QR-static-page-demo';
}
