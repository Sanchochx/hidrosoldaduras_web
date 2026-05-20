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
    dn:            'DN (mm)',
    dn1:           'DN1 (mm)',
    dn_mayor:      'DN Mayor (mm)',
    dn_menor:      'DN Menor (mm)',
    pn:            'PN',
    angulo_11_5:   '11.5° (mm)',
    angulo_22_5:   '22.5° (mm)',
    angulo_45:     '45° (mm)',
    angulo_90:     '90° (mm)',
    g:             'G (mm)',
    asbesto:       'Asbesto',
    g_f_mm:        'G-F (mm)',
    longitud_mm:   'Longitud (mm)',
    altura_mm:     'Altura (mm)',
    peso_pn10_kg:  'Peso PN10 (kg)',
    peso_pn16_kg:  'Peso PN16 (kg)',
  };

  constructor(
    private route: ActivatedRoute,
    private productoService: ProductoService,
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id') ?? '';
    this.categoria = this.route.snapshot.paramMap.get('categoria') ?? '';
    this.imagenPath = `assets/images/${this.categoria}/${id}.png`;

    this.productoService.getById(id).subscribe(p => {
      this.producto = p ?? null;
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
