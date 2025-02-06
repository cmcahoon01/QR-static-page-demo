import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';  // Add this

@Component({
  selector: 'app-root',
  standalone: true,  // Add this
  imports: [RouterOutlet],  // Add this
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'routesExperiment';
}
