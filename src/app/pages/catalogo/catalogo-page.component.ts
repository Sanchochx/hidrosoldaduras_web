import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

interface Product {
  title: string;
  desc: string;
  img: string;
  alt: string;
  price: string;
  badge?: string;
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
        title: 'Codo 90°',
        desc: 'Accesorio de cambio de dirección en tuberías hidráulicas, fabricado en acero al carbono o inoxidable según especificación.',
        img: 'assets/images/tarjeta_1.jpeg',
        alt: 'Codo 90°',
        price: 'Cotizar',
        badge: 'NUEVO',
      },
      {
        title: 'Codo 45°',
        desc: 'Accesorio de deflexión suave para minimizar pérdidas de presión en sistemas de conducción a gran caudal.',
        img: 'assets/images/tarjeta_1.jpeg',
        alt: 'Codo 45°',
        price: 'Cotizar',
      },
      {
        title: 'Tee de Derivación',
        desc: 'Pieza en T para bifurcación de flujos en sistemas hidráulicos y de tratamiento de aguas de gran diámetro.',
        img: 'assets/images/tarjeta_1.jpeg',
        alt: 'Tee de Derivación',
        price: 'Cotizar',
      },
      {
        title: 'Reducción Concéntrica',
        desc: 'Transición entre diámetros para sistemas de tuberías con cambios de sección y flujos controlados.',
        img: 'assets/images/tarjeta_1.jpeg',
        alt: 'Reducción Concéntrica',
        price: 'Cotizar',
      },
      {
        title: 'Unión de Reparación',
        desc: 'Conector para empalme y reparación rápida de tramos de tubería sin necesidad de soldadura en campo.',
        img: 'assets/images/tarjeta_1.jpeg',
        alt: 'Unión de Reparación',
        price: 'Cotizar',
      },
      {
        title: 'Brida Ciega',
        desc: 'Cierre hermético de extremos de tubería en sistemas a presión, fabricada bajo normativa ANSI/ASME.',
        img: 'assets/images/tarjeta_1.jpeg',
        alt: 'Brida Ciega',
        price: 'Cotizar',
      },
      {
        title: 'Niple Roscado',
        desc: 'Conector corto con rosca en ambos extremos para conexiones directas en sistemas hidráulicos de media presión.',
        img: 'assets/images/tarjeta_1.jpeg',
        alt: 'Niple Roscado',
        price: 'Cotizar',
      },
      {
        title: 'Tapón Hexagonal',
        desc: 'Cierre mecanizado de orificios y conexiones en tuberías y accesorios bajo presión de trabajo.',
        img: 'assets/images/tarjeta_1.jpeg',
        alt: 'Tapón Hexagonal',
        price: 'Cotizar',
      },
      {
        title: 'Collarín de Derivación',
        desc: 'Accesorio para crear derivaciones sobre tuberías existentes sin interrupción del servicio.',
        img: 'assets/images/tarjeta_1.jpeg',
        alt: 'Collarín de Derivación',
        price: 'Cotizar',
      },
    ],
  },
};

@Component({
  selector: 'app-catalogo-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './catalogo-page.component.html',
  styleUrl: './catalogo-page.component.scss',
})
export class CatalogoPageComponent implements OnInit {
  catalogTitle = '';
  catalogSubtitle = '';
  products: Product[] = [];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const categoria = this.route.snapshot.paramMap.get('categoria') ?? '';
    const data = CATALOG_DATA[categoria];
    if (data) {
      this.catalogTitle = data.title;
      this.catalogSubtitle = data.subtitle;
      this.products = data.products;
    }
  }
}
