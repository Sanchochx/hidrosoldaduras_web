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
  isLoading = true;
  notFound = false;

  readonly specConfig: { key: string; label: string; icon: string }[] = [
    { key: 'diametros',     label: 'Rango de Diámetros',  icon: 'fa-ruler-combined' },
    { key: 'presion',       label: 'Presión',              icon: 'fa-gauge-high' },
    { key: 'temperatura',   label: 'Temperatura',          icon: 'fa-temperature-half' },
    { key: 'conexion',      label: 'Tipo de Conexión',     icon: 'fa-plug' },
    { key: 'cedulas',       label: 'Cédulas',              icon: 'fa-bars' },
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
    dnxdn:         'DNxdn',
    pn:            'PN',
    angulo_11_5:   '11.5°',
    angulo_22_5:   '22.5°',
    angulo_45:     '45°',
    angulo_90:     '90°',
    g:             'G',
    asbesto:       'Asbesto',
    g_f_mm:        'G+F',
    longitud_mm:   'Longitud',
    altura_mm:     'Altura',
    peso_pn10_kg:  'PN10',
    peso_pn16_kg:  'PN16',
  };

  private readonly dnFields = new Set(['dn', 'dn1', 'dn_mayor', 'dn_menor']);

  private readonly dnMmToInches: { [mm: number]: string } = {
    40:   '1½',
    50:   '2',
    63:   '2½',
    65:   '2½',
    75:   '3',
    100:  '4',
    150:  '6',
    160:  '6',
    200:  '8',
    250:  '10',
    300:  '12',
    350:  '14',
    400:  '16',
    450:  '18',
    500:  '20',
    600:  '24',
    700:  '28',
    750:  '30',
    800:  '32',
    863:  '34',
    900:  '36',
    920:  '36',
    1000: '40',
    1066: '42',
    1100: '44',
    1200: '48',
    1219: '48',
    1500: '60',
  };

  formatDnCell(value: unknown, key: string): string {
    if (!this.dnFields.has(key)) return value !== null && value !== undefined ? String(value) : '—';
    if (value === null || value === undefined) return '—';
    if (typeof value === 'string') return value;
    const mm = value as number;
    const inches = this.dnMmToInches[mm];
    return inches ? `${inches}" / ${mm} MM` : `${mm} MM`;
  }

  constructor(
    private route: ActivatedRoute,
    private productoService: ProductoService,
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id') ?? '';
    this.categoria = this.route.snapshot.paramMap.get('categoria') ?? '';

    this.productoService.getById(id).subscribe({
      next: p => {
        if (p) {
          this.producto = p;
          this.imagenPath = `assets/images/${this.categoria}/${p.imagen}`;
        } else {
          this.notFound = true;
        }
        this.isLoading = false;
      },
      error: () => {
        this.notFound = true;
        this.isLoading = false;
      },
    });
  }

  get tableHeaders(): string[] {
    if (!this.producto?.tabla_dimensiones?.length) return [];
    return Object.keys(this.producto.tabla_dimensiones[0]);
  }

  get tableGrupos(): { label: string; columnas: string[] }[] {
    return this.producto?.tabla_grupos ?? [];
  }

  get tableSimpleHeaders(): string[] {
    const grouped = new Set(this.tableGrupos.flatMap(g => g.columnas));
    return this.tableHeaders.filter(h => !grouped.has(h));
  }

  labelFor(key: string): string {
    return this.tableHeaderLabels[key] ?? key.replace(/_/g, ' ').toUpperCase();
  }
}
