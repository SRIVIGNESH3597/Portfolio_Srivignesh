import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent implements OnInit, OnDestroy {
  displayText = '';
  private roles = ['Angular Developer', 'Frontend Specialist', 'Associate', 'UI Architect'];
  private roleIndex = 0;
  private charIndex = 0;
  private deleting = false;
  private timer: any;

  ngOnInit() { this.type(); }
  ngOnDestroy() { clearTimeout(this.timer); }

  scrollDown() {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  }

  private type() {
    const current = this.roles[this.roleIndex];
    if (!this.deleting) {
      this.displayText = current.substring(0, ++this.charIndex);
      if (this.charIndex === current.length) {
        this.deleting = true;
        this.timer = setTimeout(() => this.type(), 1800);
        return;
      }
    } else {
      this.displayText = current.substring(0, --this.charIndex);
      if (this.charIndex === 0) {
        this.deleting = false;
        this.roleIndex = (this.roleIndex + 1) % this.roles.length;
      }
    }
    this.timer = setTimeout(() => this.type(), this.deleting ? 55 : 95);
  }
}
