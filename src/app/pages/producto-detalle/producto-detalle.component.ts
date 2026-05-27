import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProductoService, Producto } from '../../services/producto.service';

@Component({
  selector: 'app-producto-detalle',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './producto-detalle.component.html',
  styleUrl: './producto-detalle.component.scss',
})
export class ProductoDetalleComponent implements OnInit {
  producto: Producto | null = null;
  categoria = '';
  imagenPath = '';

  readonly specConfig: { key: string; label: string; icon: string }[] = [
    { key: 'diametros',     label: 'Rango de Diámetros',  icon: 'fa-ruler-combined' },
    { key: 'presion',       label: 'Presión',              icon: 'fa-gauge-high' },
    { key: 'temperatura',   label: 'Temperatura',          icon: 'fa-temperature-half' },
    { key: 'conexion',      label: 'Tipo de Conexión',     icon: 'fa-plug' },
    { key: 'fluidos',       label: 'Fluidos Compatibles',  icon: 'fa-droplet' },
    { key: 'recubrimiento', label: 'Recubrimiento',        icon: 'fa-layer-group' },
  ];

  readonly charIcons = [
    'fa-industry',
    'fa-arrows-rotate',
    'fa-link-slash',
    'fa-shield-halved',
    'fa-spray-can-sparkles',
  ];

  private readonly tableHeaderLabels: { [key: string]: string } = {
    dn:            'DN',
    dn1:           'DN1',
    dn_mayor:      'DN Mayor',
    dn_menor:      'DN Menor',
    pn:            'PN',
    angulo_11_5:   '11.5°',
    angulo_22_5:   '22.5°',
    angulo_45:     '45°',
    angulo_90:     '90°',
    g:             'G',
    asbesto:       'Asbesto',
    g_f_mm:        'G-F',
    longitud_mm:   'Longitud',
    altura_mm:     'Altura',
    peso_pn10_kg:  'Peso PN10',
    peso_pn16_kg:  'Peso PN16',
  };

  constructor(
    private route: ActivatedRoute,
    private productoService: ProductoService,
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id') ?? '';
    this.categoria = this.route.snapshot.paramMap.get('categoria') ?? '';

    this.productoService.getById(id).subscribe(p => {
      this.producto = p ?? null;
      if (this.producto) {
        this.imagenPath = `assets/images/${this.categoria}/${this.producto.imagen}`;
      }
    });
  }

  get tableHeaders(): string[] {
    if (!this.producto?.tabla_dimensiones?.length) return [];
    return Object.keys(this.producto.tabla_dimensiones[0]);
  }

  labelFor(key: string): string {
    return this.tableHeaderLabels[key] ?? key.replace(/_/g, ' ').toUpperCase();
  }
}
