import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProductoService, Producto } from '../../services/producto.service';

declare var AOS: any;

const CATALOG_META: Record<string, { title: string }> = {
  fabricacion: {
    title: 'CATÁLOGO — FABRICACIÓN',
  },
  valvulas: {
    title: 'CATÁLOGO — VÁLVULAS',
  },
  uniones: {
    title: 'CATÁLOGO — UNIONES Y ACOPLES',
  },
  accesorios: {
    title: 'CATÁLOGO — ACCESORIOS',
  },
};

interface ImagenCatalogo {
  nombre: string;
  imagen: string;
}

// Accesorios no tiene fichas de producto individuales: se muestra como galería de imágenes,
// sin navegación a una página de detalle.
const ACCESORIOS_IMAGENES: ImagenCatalogo[] = [
  { nombre: 'Accesorios en Acero Inoxidable', imagen: 'ACCESORIOS EN ACERO INOXIDABLE.png' },
  { nombre: 'Accesorios en Bronce', imagen: 'ACCESORIOS EN BRONCE.png' },
  { nombre: 'Bridas en Acero al Carbón', imagen: 'BRIDAS EN ACERO AL CARBON.png' },
  { nombre: 'Niples en Acero Inoxidable', imagen: 'NIPLES EN ACERO INOXIDABLE.png' },
  { nombre: 'Red Contra Incendio', imagen: 'RED CONTRA INCENDIO.png' },
];

@Component({
  selector: 'app-catalogo-page',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './catalogo-page.component.html',
  styleUrl: './catalogo-page.component.scss',
})
export class CatalogoPageComponent implements OnInit {
  catalogTitle = '';
  productos: Producto[] = [];
  categoria = '';
  esGaleria = false;
  imagenesGaleria: ImagenCatalogo[] = [];

  constructor(private route: ActivatedRoute, private productoService: ProductoService) {}

  ngOnInit(): void {
    this.categoria = this.route.snapshot.paramMap.get('categoria') ?? '';
    const meta = CATALOG_META[this.categoria];
    this.catalogTitle = meta?.title ?? '';
    this.esGaleria = this.categoria === 'accesorios';

    if (this.esGaleria) {
      this.imagenesGaleria = ACCESORIOS_IMAGENES;
      setTimeout(() => AOS.refresh(), 0);
      return;
    }

    this.productoService.getAll().subscribe(productos => {
      this.productos = productos.filter(p => p.categoria === this.categoria);
      setTimeout(() => AOS.refresh(), 0);
    });
  }

  imagenPath(producto: Producto): string {
    return `/assets/images/${this.categoria}/${producto.imagen}`;
  }

  imagenGaleriaPath(item: ImagenCatalogo): string {
    return `/assets/images/${this.categoria}/${item.imagen}`;
  }

  // TODO: reemplazar por fotos reales en assets/images/fabricacion/ — mientras tanto se
  // genera un placeholder azul con el nombre del producto para los ítems sin imagen.
  onImageError(event: Event, producto: Producto): void {
    const img = event.target as HTMLImageElement;
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="400" height="225">
      <rect width="100%" height="100%" fill="#1565C0"/>
      <text x="50%" y="50%" fill="#FFFFFF" font-family="sans-serif" font-size="22" font-weight="700"
        text-anchor="middle" dominant-baseline="middle">${producto.nombre.toUpperCase()}</text>
    </svg>`;
    img.src = `data:image/svg+xml,${encodeURIComponent(svg)}`;
  }
}
