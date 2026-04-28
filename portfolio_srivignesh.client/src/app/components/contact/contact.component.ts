import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  form = { name: '', email: '', subject: '', message: '' };
  submitted = false;

  contactInfo = [
    { icon: 'fas fa-envelope', label: 'Email', value: 'srivicky3597@gmail.com', href: 'mailto:srivicky3597@gmail.com' },
    { icon: 'fas fa-phone', label: 'Phone', value: '+91 7904106831', href: 'tel:+917904106831' },
    { icon: 'fab fa-linkedin-in', label: 'LinkedIn', value: 'Connect on LinkedIn', href: 'https://www.linkedin.com/in/srivignesh-t-0430b2176/' },
    { icon: 'fab fa-github', label: 'GitHub', value: 'View my repositories', href: 'https://github.com/' },
  ];

  onSubmit() {
    const { name, email, subject, message } = this.form;
    const mailto = `mailto:srivicky3597@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`)}`;
    window.location.href = mailto;
    this.submitted = true;
    setTimeout(() => this.submitted = false, 4000);
  }
}
