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
      title: 'Válvulas',
      desc: 'Válvulas de compuerta, mariposa, retención, chapaleta y ventosas para sistemas hidráulicos industriales y redes de acueducto.',
      img: 'assets/images/valvula.png',
      alt: 'Válvulas',
      catalogRoute: '/catalogo/valvulas',
    },
    {
      title: 'Uniones y Acoples',
      desc: 'Uniones universales, garra de tigre, carretes de desmonte y acoples bridados para conexión y mantenimiento de tuberías a presión.',
      img: 'assets/images/uniones.jpg',
      alt: 'Uniones y Acoples',
      catalogRoute: '/catalogo/uniones',
    },
    {
      title: 'Accesorios',
      desc: 'Amplio portafolio de accesorios hidráulicos complementarios para el ensamble, instalación y mantenimiento de sistemas a presión.',
      img: 'assets/images/accesorios/accesorios_front.png',
      alt: 'Accesorios',
      catalogRoute: '/catalogo/accesorios',
    },
  ];
}
