import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  projects = [
    {
      title: 'EventHub',
      description: 'A full-stack event management platform built with Angular and C# .NET, integrating PostgreSQL for data persistence and REST APIs for seamless frontend-backend communication. Developed responsive UI components, implemented form validation, resolved defects, and wrote PostgreSQL queries for efficient data retrieval.',
      tech: ['Angular', 'TypeScript', 'C#', '.NET', 'PostgreSQL', 'REST APIs', 'Reactive Forms'],
      icon: 'fas fa-calendar-alt',
      color: '#e8b84b',
      liveUrl: null
    },
    {
      title: 'Account Dashboard',
      description: 'Full-featured Angular v21 account management dashboard. Features RBAC with route guards, real-time account search using RxJS debounce, observable caching to eliminate redundant API calls, and a custom directive for input sanitization app-wide.',
      tech: ['Angular v21', 'TypeScript', 'RxJS', 'RBAC', 'Observable Caching'],
      icon: 'fas fa-tachometer-alt',
      color: '#00c896',
      liveUrl: null
    },
    {
      title: 'Mainspring Utility – Risk Module',
      description: 'Developed the Risk Module within the Mainspring Utility platform — an Angular-based enterprise application for assessing and managing operational risks. Implemented dynamic risk matrices, configurable scoring logic, and real-time data binding for risk reporting.',
      tech: ['Angular', 'TypeScript', 'RxJS', 'Reactive Forms', 'Azure DevOps'],
      icon: 'fas fa-shield-alt',
      color: '#ff6b6b',
      liveUrl: null
    },
    {
      title: 'Mainspring Utility – Archetype Module',
      description: 'Built the Archetype Module for the Mainspring Utility platform, enabling configuration and management of organisational archetypes. Delivered dynamic form-driven UI with complex validation rules, archetype categorisation, and seamless integration with backend APIs.',
      tech: ['Angular', 'TypeScript', 'Reactive Forms', 'REST APIs', 'Git'],
      icon: 'fas fa-layer-group',
      color: '#00c896',
      liveUrl: null
    },
    {
      title: 'World Vision — UI Module',
      description: 'Developed a new UI module for the World Vision humanitarian platform. Performed smoke testing, resolved EIT client-raised bugs across UAT and DEV environments, and managed code merges via Team Explorer in Visual Studio.',
      tech: ['Angular', 'TypeScript', 'JavaScript', 'Visual Studio', 'Team Explorer', 'Git'],
      icon: 'fas fa-hand-holding-heart',
      color: '#00c896',
      liveUrl: null
    },
    {
      title: 'The Global Fund — Finance Portal',
      description: 'Enterprise Angular application for The Global Fund — one of the largest international financing institutions. Built cash reconciliation, bank reconciliation and open advances modules using Angular Reactive Forms. Managed version migrations, GIT branch strategies and UAT deployments.',
      tech: ['Angular', 'TypeScript', 'RxJS', 'Reactive Forms', 'Azure DevOps', 'Azure Portal', 'Git'],
      icon: 'fas fa-globe',
      color: '#e8b84b',
      liveUrl: null
    },
    {
      title: 'Angular Developer Bootcamp — Cognizant',
      description: 'Completed an intensive 6-month Angular development programme at Cognizant. Built multiple hands-on projects covering form validation, Reactive Forms, component architecture, data binding, services and RxJS — forming the technical foundation for all subsequent client engagements.',
      tech: ['Angular', 'TypeScript', 'Reactive Forms', 'RxJS', 'HTML5', 'CSS3'],
      icon: 'fas fa-laptop-code',
      color: '#ff6b6b',
      liveUrl: null
    }
  ];
}
