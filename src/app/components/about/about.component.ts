import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  features = [
    'Dominio de todo tipo de soldaduras',
    'Servicios de ingeniería únicos',
    'Presencia nacional en 30 ciudades',
    'Compromiso en seguridad en todos los niveles',
    'Alto nivel de excelencia operativa',
    'Equipo apasionado y especializado',
    'Pioneros en tecnología',
    'Cumpliendo reglamentación colombiana',
    'Servicio personalizado',
  ];

  stats = [
    { number: '200',  label: 'Obras al año',          sublabel: 'Ejecutadas anualmente' },
    { number: '70',   label: 'Empleados',              sublabel: 'Equipo especializado' },
    { number: '30',   label: 'Ciudades',               sublabel: 'Presencia nacional' },
    { number: '+12',  label: 'Proyectos PTAR-PTAP',    sublabel: 'Infraestructura hídrica' },
    { number: '+70',  label: 'Proyectos de vivienda',  sublabel: 'Sector residencial' },
  ];

  capabilities = [
    {
      icon: 'fa-fire-flame-curved',
      title: 'Soldadura Especializada',
      desc: 'Dominio de todo tipo de soldaduras: TIG, MIG, SMAW y procesos especializados para tuberías hidráulicas.'
    },
    {
      icon: 'fa-droplet',
      title: 'Sistemas Hidráulicos',
      desc: 'Instalación y mantenimiento de válvulas, uniones, accesorios y sistemas de presión industrial.'
    },
    {
      icon: 'fa-diagram-project',
      title: 'Ingeniería de Proyectos',
      desc: 'Diseño y ejecución de proyectos PTAR, PTAP y sistemas de agua potable.'
    },
    {
      icon: 'fa-map-location-dot',
      title: 'Presencia Nacional',
      desc: 'Cobertura en 30 ciudades con equipos especializados listos para cualquier obra.'
    },
    {
      icon: 'fa-shield-halved',
      title: 'Control de Calidad',
      desc: 'Procesos certificados y estricto cumplimiento de la reglamentación colombiana de construcción.'
    },
    {
      icon: 'fa-building',
      title: 'Proyectos de Vivienda',
      desc: 'Más de 70 proyectos residenciales ejecutados con alto estándar técnico y seguridad.'
    }
  ];
}
