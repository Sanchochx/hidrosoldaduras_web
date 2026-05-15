import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface PhoneLink {
  display: string;
  href: string;
}

interface ContactCard {
  icon: string;
  iconPrefix?: string;
  title: string;
  content?: string;
  link?: string;
  externalLink?: boolean;
  phones?: PhoneLink[];
}

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  contactCards: ContactCard[] = [
    {
      icon: 'fa-location-dot',
      title: 'Dirección',
      content: 'Calle 12b #23-24, Barrio Ricaurte, Bogotá D.C.',
      link: 'https://maps.google.com/?q=Calle+12b+%2323-24+Ricaurte+Bogota',
      externalLink: true
    },
    {
      icon: 'fa-phone',
      title: 'Teléfonos',
      phones: [
        { display: '3224465872', href: 'tel:+573224465872' },
        { display: '3008540032', href: 'tel:+573008540032' },
        { display: '3138257620', href: 'tel:+573138257620' }
      ]
    },
    {
      icon: 'fa-envelope',
      title: 'Email',
      content: 'Hidrasoldadurasach@gmail.com',
      link: 'mailto:Hidrasoldadurasach@gmail.com'
    },
    {
      icon: 'fa-clock',
      title: 'Horario',
      content: 'Lunes a Sábado · 8:00 a.m. – 6:00 p.m.'
    },
    {
      icon: 'fa-instagram',
      iconPrefix: 'fa-brands',
      title: 'Instagram',
      content: '@hidrosoldaduras_ach_sas',
      link: 'https://www.instagram.com/hidrosoldaduras_ach_sas/',
      externalLink: true
    }
  ];
}
