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
    codigo:        'CODIGO',
    descripcion:   'DESCRIPCIÓN',
    junta_hidraulica: 'JUNTA HIDRÁULICA',
    extremo_liso:  'EXTREMO LISO',
    bridada:       'BRIDADA',
    garra_tigre:   'GARRA DE TIGRE',
    precio:        'PRECIO',
    sello_bronce:  'SELLO EN BRONCE',
    compuerta_elastica: 'COMPUERTA ELÁSTICA',
    lisa:          'LISA',
  };

  private readonly dnFields = new Set(['dn', 'dn1', 'dn_mayor', 'dn_menor']);

  private readonly priceFields = new Set([
    'junta_hidraulica', 'extremo_liso', 'bridada', 'garra_tigre',
    'precio', 'sello_bronce', 'compuerta_elastica', 'lisa',
  ]);

  private readonly idsConFichaTecnica = new Set([
    'codo-bridado-mixto',
    'codo-liso',
    'compuerta-tipo-bridada',
    'compuerta-tipo-pasamuro',
    'compuerta-tipo-plana',
    'niple-pasamuro-bridado-mixto',
    'niple-pasamuro-liso',
    'reduccion-excentrica-concentrica-bridada',
    'reduccion-excentrica-concentrica-liso',
    'tee-bridada-mixta',
    'tee-lisa',
    'union-autoportante',
    'union-dresser',
    'union-transicion-pvc-ac-hd-ac',
    'valvula-de-pie',
    'yee-bridada-mixta',
    'yee-lisa',
  ]);

  get tieneFichaTecnica(): boolean {
    return !!this.producto && this.idsConFichaTecnica.has(this.producto.id);
  }

  private readonly conexionImagenes: { [tipo: string]: string } = {
    'Junta Hidráulica': 'junta-hidraulica.png',
    'Extremo Liso':     'extremo-liso.png',
    'Bridada':          'bridada.png',
    'Garra de Tigre':   'garra-tigre.png',
  };

  get tiposConImagen(): { label: string; src: string }[] {
    if (!this.producto) return [];
    return this.producto.tipos
      .filter(tipo => this.conexionImagenes[tipo])
      .map(tipo => ({ label: tipo, src: `assets/images/valvulas/${this.conexionImagenes[tipo]}` }));
  }

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
    if (this.priceFields.has(key)) {
      if (value === null || value === undefined) return '';
      return `$ ${new Intl.NumberFormat('es-CO').format(value as number)}`;
    }
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
          this.imagenPath = `/assets/images/${this.categoria}/${p.imagen}`;
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

  get whatsappUrl(): string {
    const mensaje = `Hola, quiero cotizar: ${this.producto?.nombre ?? ''}`;
    return `https://wa.me/573224465872?text=${encodeURIComponent(mensaje)}`;
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

  // TODO: reemplazar por fotos reales en assets/images/fabricacion/ — mientras tanto se
  // genera un placeholder azul con el nombre del producto para los ítems sin imagen.
  onImageError(event: Event): void {
    if (!this.producto) return;
    const img = event.target as HTMLImageElement;
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="600" height="450">
      <rect width="100%" height="100%" fill="#1565C0"/>
      <text x="50%" y="50%" fill="#FFFFFF" font-family="sans-serif" font-size="28" font-weight="700"
        text-anchor="middle" dominant-baseline="middle">${this.producto.nombre.toUpperCase()}</text>
    </svg>`;
    img.src = `data:image/svg+xml,${encodeURIComponent(svg)}`;
  }
}
