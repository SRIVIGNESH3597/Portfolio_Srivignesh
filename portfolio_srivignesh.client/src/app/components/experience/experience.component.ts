import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss'
})
export class ExperienceComponent {
  activeJobIdx = 0;
  activeEduIdx = 0;
  currentYear = new Date().getFullYear().toString();

  jobs = [
    {
      year: '2026',
      period: 'Feb 2026 – Present',
      role: 'Angular Developer – EventHub',
      company: 'EventHub',
      via: '',
      location: 'India',
      description: 'Currently contributing to EventHub — a full-stack event management platform built with Angular and C# .NET, integrating PostgreSQL for data persistence and REST APIs for seamless frontend-backend communication.',
      highlights: [
        'Developed responsive and interactive UI components using Angular, delivering a clean and functional user experience',
        'Integrated REST APIs to fetch and display dynamic data from a PostgreSQL database on the Angular frontend',
        'Built C# .NET backend services to query and return data from PostgreSQL, bridging the database layer with the Angular application',
        'Implemented robust form validation using Angular Reactive Forms, ensuring accurate data entry and user feedback',
        'Resolved UI and functional defects, improving application stability and overall user experience',
        'Wrote and executed PostgreSQL SELECT queries for efficient data retrieval from database tables',
        'Implemented PostgreSQL DROP functions and managed database schema operations as part of backend development'
      ],
      tech: ['Angular', 'TypeScript', 'C#', '.NET', 'PostgreSQL', 'REST APIs', 'Reactive Forms']
    },
    {
      year: '2025',
      period: 'Sep 2025 – Jan 2026',
      role: 'Angular Developer – Account Dashboard',
      company: 'Mainspring',
      via: '',
      location: 'India',
      description: 'Led development of the Account Dashboard module — an Angular v21 application featuring RBAC, real-time search, and observable caching for optimised performance.',
      highlights: [
        'Led Angular v18 → v21 upgrade: migrated all dependencies, resolved breaking changes',
        'Applied RBAC with route guards, session management, and inactivity/idle timeout',
        'Built real-time account search using RxJS debounce & smart filtering',
        'Used observable caching to eliminate redundant API calls across subscribers',
        'Automated access-grant email notification on user permission assignment',
        'Custom directive for input sanitization, blocking special characters app-wide'
      ],
      tech: ['Angular v21', 'RxJS', 'RBAC', 'Observable Caching', 'TypeScript']
    },
    {
      year: '2024',
      period: 'Mar 2024 – Sep 2025',
      role: 'Angular Developer – Risk Module',
      company: 'Mainspring Utility',
      via: '',
      location: 'India',
      description: 'Developed the Risk Module within the Mainspring Utility platform — handling risk submissions, file attachments, email notifications, and full Azure DevOps deployment pipeline management.',
      highlights: [
        'Designed parent-child component architecture with shared service data flow',
        'Risk submission triggers email with encrypted payload and dynamic HTML via REST',
        'Batch job email trigger with transaction ID persisted to database per notification',
        'File attachment component: PDF, DOCX, XLSX, PNG, MSG with size validation',
        'Managed Dev → SIT → UAT → Prod deployments through Azure DevOps pipelines'
      ],
      tech: ['Angular', 'REST API', 'File Handling', 'Azure DevOps', 'TypeScript']
    },
    {
      year: '2024',
      period: '2024 – Mar 2025',
      role: 'Angular Developer – Archetype Module',
      company: 'Mainspring Utility',
      via: '',
      location: 'India',
      description: 'Built the Archetype Module featuring AES-256 encryption, AI-powered SOW auto-fill using Azure Document Intelligence and GPT, and full CI/CD pipeline management.',
      highlights: [
        'Implemented AES-256 encryption/decryption via CryptoJS for all API payloads',
        'AI-powered SOW auto-fill integrating Azure Document Intelligence + GPT',
        'Crafted OpenAI prompts for structured JSON field-level extraction',
        'Coordinated Dev → SIT → UAT → Prod releases via Azure DevOps CI/CD'
      ],
      tech: ['Azure OpenAI', 'Document Intelligence', 'AES-256', 'Angular', 'CryptoJS']
    },
    {
      year: '2023',
      period: '2023 – 2024',
      role: 'Angular Developer',
      company: 'World Vision',
      via: '',
      location: 'India (Offshore)',
      description: 'Contributed to UI development of a new application module for World Vision, one of the largest humanitarian organisations, focusing on quality and stability.',
      highlights: [
        'Developed a new UI module from scratch and performed smoke testing',
        'Resolved low and medium severity bugs from client-raised EIT issues',
        'Fixed bugs in UAT and DEV environments ensuring stable releases',
        'Merged code in Team Explorer Visual Studio branches post code review and deployed into DEV'
      ],
      tech: ['Angular', 'TypeScript', 'JavaScript', 'Visual Studio', 'Team Explorer', 'Git']
    },
    {
      year: '2022',
      period: '2022 – 2023',
      role: 'Frontend Developer / Angular Developer',
      company: 'The Global Fund',
      via: '',
      location: 'India (Offshore)',
      description: 'Delivered complex finance-facing Angular features for one of the largest international financing institutions, handling cash reconciliation, bank reconciliation and open advance modules.',
      highlights: [
        'Implemented business features & enhancements to Angular application including complex finance forms (cash reconciliation, bank reconciliation, open advances) using Angular Reactive Forms',
        'Upgraded and migrated application to higher Angular versions, resolving NPM dependency errors',
        'Refactored missing code from GIT branches after conflicts during GIT Branch Merges',
        'Created & merged GIT Development branches post code review; deployed into DEV via Azure DevOps',
        'Moved GIT signoff branches to UAT by merging with master after client approval',
        'Collaborated with Onsite Technical Lead, Program Manager, client teams & stakeholders for architecture-level changes',
        'Used UI Logger & Azure Portal to diagnose complex backend server-side API issues'
      ],
      tech: ['Angular', 'TypeScript', 'RxJS', 'Reactive Forms', 'Azure DevOps', 'Git', 'Azure Portal']
    },
    {
      year: '2021',
      period: 'Feb 2021 – Sep 2021',
      role: 'Angular Developer Intern',
      company: 'Cognizant',
      via: '',
      location: 'India',
      description: 'Completed a 6-month internship at Cognizant with intensive Angular training, gaining hands-on experience by developing multiple practice projects covering core Angular concepts and real-world frontend development patterns.',
      highlights: [
        'Underwent structured Angular training covering core concepts including components, modules, services, routing and lifecycle hooks',
        'Built form validation projects using both Template-driven and Reactive Forms with custom validators and error handling',
        'Developed Angular Reactive Forms-based applications simulating real-world data entry and submission workflows',
        'Worked on mini-projects covering Angular directives, data binding, event handling and component communication',
        'Gained practical experience with TypeScript, RxJS observables and Angular CLI tooling during training',
        'Completed multiple training assignments reinforcing best practices in Angular component architecture and code organisation'
      ],
      tech: ['Angular', 'TypeScript', 'Reactive Forms', 'RxJS', 'HTML5', 'CSS3']
    }
  ];

  education = [
    {
      year: '2025',
      period: 'Currently Pursuing',
      degree: 'MBA – Human Resource Management',
      institution: 'University of Madras',
      location: 'Chennai, Tamil Nadu',
      grade: 'Pursuing',
      highlights: [
        'Specialising in Human Resource Management',
        'Developing expertise in organizational behaviour and people management',
        'Currently enrolled at University of Madras'
      ]
    },
    {
      year: '2022',
      period: 'Nov 2020 – Apr 2022',
      degree: 'M.E. – Embedded & Real Time Systems',
      institution: 'PSG College of Technology',
      location: 'Coimbatore, Tamil Nadu',
      grade: 'CGPA: 8.2',
      highlights: [
        'Specialised in Embedded Systems and Real Time Systems',
        'Strong foundation in hardware-software integration and system design',
        'Graduated with a CGPA of 8.2'
      ]
    },
    {
      year: '2019',
      period: 'Aug 2015 – Apr 2019',
      degree: 'B.E. – Electronics & Instrumentation',
      institution: 'SNS College of Technology',
      location: 'Coimbatore, Tamil Nadu',
      grade: 'CGPA: 7.2',
      highlights: [
        'Specialised in Electronics and Instrumentation Engineering',
        'Core programming in C, Java and embedded systems',
        'Graduated with a CGPA of 7.2'
      ]
    }
  ];

  awards = [
    {
      type: 'Certification',
      title: 'Devin AI Developer Certification',
      desc: 'Certified in AI-assisted software development using Devin — demonstrating proficiency in leveraging AI tools to accelerate engineering workflows and code quality.',
      issuer: 'Devin / Cognition AI',
      icon: 'fas fa-robot'
    },
    {
      type: 'Course Certification',
      title: 'Angular – The Complete Guide',
      desc: 'Completed the comprehensive Angular course on Udemy covering components, directives, services, routing, reactive forms, RxJS, NgRx and advanced Angular concepts.',
      issuer: 'Udemy',
      icon: 'fab fa-angular'
    },
    {
      type: 'Award',
      title: 'Best Team Work Member',
      desc: 'Recognised by Cognizant for outstanding collaboration, cross-team communication, and consistent contribution to team success across project deliveries.',
      issuer: 'Cognizant',
      icon: 'fas fa-trophy'
    }
  ];
}
