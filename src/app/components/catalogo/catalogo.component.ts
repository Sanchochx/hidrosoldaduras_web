import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-catalogo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.scss']
})
export class CatalogoComponent {
  products = [
    {
      title: 'Línea Industrial',
      desc: 'Sistemas hidráulicos de alta presión para aplicaciones industriales críticas.',
      img: 'assets/images/imagen_1.jpeg',
      alt: 'Línea Industrial',
    },
    {
      title: 'Soldadura Especializada',
      desc: 'Servicios técnicos certificados en unión de materiales y tuberías de gran diámetro.',
      img: 'assets/images/imagen_1.jpeg',
      alt: 'Soldadura Especializada',
    },
    {
      title: 'Ingeniería Hidráulica',
      desc: 'Diseño y montaje de infraestructura para el tratamiento y conducción de aguas.',
      img: 'assets/images/imagen_1.jpeg',
      alt: 'Ingeniería Hidráulica',
    },
  ];
}
