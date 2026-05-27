import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

interface Product {
  title: string;
  desc: string;
  img: string;
  alt: string;
  price: string;
  badge?: string;
  routeId?: string;
}

interface CatalogEntry {
  title: string;
  subtitle: string;
  products: Product[];
}

const CATALOG_DATA: Record<string, CatalogEntry> = {
  fabricacion: {
    title: 'CATÁLOGO — FABRICACIÓN',
    subtitle:
      'Fabricamos codos, uniones, tees, reducciones y accesorios hidráulicos a medida, con materiales certificados y acabados de alta resistencia.',
    products: [
      {
        title: 'Codo Bridado o Mixto',
        desc: 'Accesorio de cambio de dirección con extremos bridados o combinados bridado-liso, para conexiones de alta presión en sistemas hidráulicos.',
        img: 'assets/images/fabricacion/codo-bridado-mixto.png',
        alt: 'Codo Bridado o Mixto',
        price: 'Cotizar',
        routeId: 'codo-bridado-mixto',
      },
      {
        title: 'Codo Liso',
        desc: 'Cambio de dirección de tubería con extremos lisos para unión soldada, fabricado en acero al carbono o inoxidable según especificación.',
        img: 'assets/images/fabricacion/codo-liso.jpeg',
        alt: 'Codo Liso',
        price: 'Cotizar',
        routeId: 'codo-liso',
      },
      {
        title: 'Tee Bridada o Mixta',
        desc: 'Pieza en T con extremos bridados o mixtos para derivación de flujos en sistemas de alta presión y gran diámetro.',
        img: 'assets/images/fabricacion/tee-bridada-mixta.jpeg',
        alt: 'Tee Bridada o Mixta',
        price: 'Cotizar',
        routeId: 'tee-bridada-mixta',
      },
      {
        title: 'Tee Lisa',
        desc: 'Bifurcación de tubería con extremos lisos para unión soldada en sistemas hidráulicos y de conducción de agua.',
        img: 'assets/images/fabricacion/tee-lisa.jpeg',
        alt: 'Tee Lisa',
        price: 'Cotizar',
        routeId: 'tee-lisa',
      },
      {
        title: 'Yee Bridada o Mixta',
        desc: 'Accesorio en Y con extremos bridados o combinados para derivaciones angulares en redes de distribución hidráulica.',
        img: 'assets/images/fabricacion/yee-bridada-mixta.png',
        alt: 'Yee Bridada o Mixta',
        price: 'Cotizar',
        routeId: 'yee-bridada-mixta',
      },
      {
        title: 'Yee Lisa',
        desc: 'Pieza en Y con extremos lisos para derivaciones angulares soldadas en sistemas de conducción a presión.',
        img: 'assets/images/fabricacion/yee-lisa.jpeg',
        alt: 'Yee Lisa',
        price: 'Cotizar',
        routeId: 'yee-lisa',
      },
      {
        title: 'Reducción Excéntrica / Concéntrica Bridada',
        desc: 'Transición entre diámetros con extremos bridados, excéntrica o concéntrica, para sistemas con cambios de sección y flujos controlados.',
        img: 'assets/images/fabricacion/reduccion-excentrica-bridada.jpeg',
        alt: 'Reducción Excéntrica Concéntrica Bridada',
        price: 'Cotizar',
        routeId: 'reduccion-excentrica-concentrica-bridada',
      },
      {
        title: 'Reducción Excéntrica / Concéntrica Lisa',
        desc: 'Transición entre diámetros con extremos lisos para unión soldada, disponible en configuración excéntrica o concéntrica.',
        img: 'assets/images/fabricacion/reduccion-excentrica-liso.jpeg',
        alt: 'Reducción Excéntrica Concéntrica Lisa',
        price: 'Cotizar',
        routeId: 'reduccion-excentrica-concentrica-liso',
      },
      {
        title: 'Niple Pasamuro Bridado o Mixto',
        desc: 'Niple de penetración mural con extremos bridados o mixtos para instalaciones en losas y muros de concreto.',
        img: 'assets/images/fabricacion/niple-pasamuro-bridado.png',
        alt: 'Niple Pasamuro Bridado o Mixto',
        price: 'Cotizar',
        routeId: 'niple-pasamuro-bridado-mixto',
      },
      {
        title: 'Niple Pasamuro Liso',
        desc: 'Niple de penetración mural con extremos lisos para instalaciones embutidas en muros y losas de concreto.',
        img: 'assets/images/fabricacion/niple-pasamuro-liso.png',
        alt: 'Niple Pasamuro Liso',
        price: 'Cotizar',
        routeId: 'niple-pasamuro-liso',
      },
      {
        title: 'Compuerta Tipo Bridada',
        desc: 'Compuerta de cierre con bridas de conexión para sistemas de control de flujo en plantas de tratamiento y redes hidráulicas.',
        img: 'assets/images/fabricacion/compuerta-bridada.png',
        alt: 'Compuerta Tipo Bridada',
        price: 'Cotizar',
        routeId: 'compuerta-tipo-bridada',
      },
      {
        title: 'Compuerta Tipo Pasamuro',
        desc: 'Compuerta de cierre diseñada para instalación en muros y losas, integrada estructuralmente a la obra civil.',
        img: 'assets/images/fabricacion/compuerta-pasamuro.jpeg',
        alt: 'Compuerta Tipo Pasamuro',
        price: 'Cotizar',
        routeId: 'compuerta-tipo-pasamuro',
      },
      {
        title: 'Compuerta Tipo Plana',
        desc: 'Compuerta de cierre plana para canales abiertos y estructuras hidráulicas, fabricada en acero estructural.',
        img: 'assets/images/fabricacion/compuerta-plana.jpeg',
        alt: 'Compuerta Tipo Plana',
        price: 'Cotizar',
        routeId: 'compuerta-tipo-plana',
      },
      {
        title: 'Unión Autoportante',
        desc: 'Unión estructural autoportante para empalme de tuberías bajo condiciones de carga axial o en instalaciones aéreas.',
        img: 'assets/images/fabricacion/union-autoportante.png',
        alt: 'Unión Autoportante',
        price: 'Cotizar',
        routeId: 'union-autoportante',
      },
      {
        title: 'Unión de Transición PVC–AC / HD–AC',
        desc: 'Accesorio de transición entre materiales (PVC o HDPE a acero) para empalmes en redes mixtas de acueducto y saneamiento.',
        img: 'assets/images/fabricacion/union-transicion-pvc-ac-hd.jpeg',
        alt: 'Unión de Transición PVC-AC HD-AC',
        price: 'Cotizar',
        routeId: 'union-transicion-pvc-ac-hd-ac',
      },
      {
        title: 'Unión Dresser',
        desc: 'Acoplamiento de reparación y empalme que permite movimiento axial y angular entre tramos de tubería sin soldadura.',
        img: 'assets/images/fabricacion/union-dresser.jpeg',
        alt: 'Unión Dresser',
        price: 'Cotizar',
        routeId: 'union-dresser',
      },
      {
        title: 'Válvula de Pie',
        desc: 'Válvula de retención instalada en la toma de succión de sistemas de bombeo para mantener el cebado y evitar reflujo.',
        img: 'assets/images/fabricacion/valvula-pie.png',
        alt: 'Válvula de Pie',
        price: 'Cotizar',
        routeId: 'valvula-de-pie',
      },
    ],
  },
};

@Component({
  selector: 'app-catalogo-page',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './catalogo-page.component.html',
  styleUrl: './catalogo-page.component.scss',
})
export class CatalogoPageComponent implements OnInit {
  catalogTitle = '';
  catalogSubtitle = '';
  products: Product[] = [];
  categoria = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.categoria = this.route.snapshot.paramMap.get('categoria') ?? '';
    const data = CATALOG_DATA[this.categoria];
    if (data) {
      this.catalogTitle = data.title;
      this.catalogSubtitle = data.subtitle;
      this.products = data.products;
    }
  }
}
