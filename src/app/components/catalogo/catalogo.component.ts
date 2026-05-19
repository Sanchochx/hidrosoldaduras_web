import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-catalogo',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.scss']
})
export class CatalogoComponent {
  products = [
    {
      title: 'Productos de Fabricación',
      desc: 'Fabricamos codos, uniones, tees, reducciones y accesorios hidráulicos a medida, con materiales certificados y acabados de alta resistencia.',
      img: 'assets/images/tarjeta_1.jpeg',
      alt: 'Productos de Fabricación',
      catalogRoute: '/catalogo/fabricacion',
    },
    {
      title: 'Soldadura Especializada',
      desc: 'Servicios técnicos certificados en unión de materiales y tuberías de gran diámetro.',
      img: 'assets/images/imagen_1.jpeg',
      alt: 'Soldadura Especializada',
      catalogRoute: null,
    },
    {
      title: 'Ingeniería Hidráulica',
      desc: 'Diseño y montaje de infraestructura para el tratamiento y conducción de aguas.',
      img: 'assets/images/imagen_1.jpeg',
      alt: 'Ingeniería Hidráulica',
      catalogRoute: null,
    },
  ];
}
