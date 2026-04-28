import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  stats = [
    { value: '3.6+', label: 'Years Experience' },
    { value: '2', label: 'Global Clients' },
    { value: '15+', label: 'Skills Mastered' },
    { value: '3', label: 'Certifications' },
  ];
}
