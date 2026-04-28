import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
  categories = [
    {
      title: 'Frontend',
      icon: 'fas fa-laptop-code',
      skills: ['Angular 2+', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Bootstrap', 'RxJS', 'jQuery']
    },
    {
      title: 'Backend & DB',
      icon: 'fas fa-database',
      skills: ['SQL', 'MongoDB', 'REST APIs', 'Node.js']
    },
    {
      title: 'Cloud & DevOps',
      icon: 'fas fa-cloud',
      skills: ['Azure Cloud', 'Azure DevOps', 'GitHub', 'Git', 'CI/CD', 'Postman', 'PowerBI']
    },
    {
      title: 'Tools & Platforms',
      icon: 'fas fa-tools',
      skills: ['Visual Studio', 'Team Explorer', 'Salesforce', 'ServiceNow', 'LabView']
    },
    {
      title: 'Methodologies',
      icon: 'fas fa-sitemap',
      skills: ['Agile', 'Scrum', 'Waterfall', 'Code Review', 'UAT Deployment', 'GIT Branching']
    },
    {
      title: 'Certifications',
      icon: 'fas fa-certificate',
      skills: ['GitHub & GitHub Copilot Developer', 'Azure AZ-900', 'Devin']
    }
  ];
}
