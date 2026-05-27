import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProductoService, Producto } from '../../services/producto.service';

const CATALOG_META: Record<string, { title: string }> = {
  fabricacion: {
    title: 'CATÁLOGO — FABRICACIÓN',
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
  productos: Producto[] = [];
  categoria = '';

  constructor(private route: ActivatedRoute, private productoService: ProductoService) {}

  ngOnInit(): void {
    this.categoria = this.route.snapshot.paramMap.get('categoria') ?? '';
    const meta = CATALOG_META[this.categoria];
    this.catalogTitle = meta?.title ?? '';

    this.productoService.getAll().subscribe(productos => {
      this.productos = productos;
    });
  }

  imagenPath(producto: Producto): string {
    return `assets/images/${this.categoria}/${producto.imagen}`;
  }
}
