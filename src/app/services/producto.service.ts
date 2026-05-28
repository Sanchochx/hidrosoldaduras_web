import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, shareReplay } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Producto {
  id: string;
  nombre: string;
  categoria: string;
  descripcion: string;
  imagen: string;
  tipos: string[];
  propiedades: { [key: string]: string };
  normas: string[];
  caracteristicas: string[];
  tabla_grupos?: { label: string; columnas: string[] }[];
  tabla_split?: number;
  tabla_dimensiones: { [key: string]: number | string | null }[];
  vida_util: string;
}

@Injectable({ providedIn: 'root' })
export class ProductoService {
  private readonly jsonUrl = '/assets/data/productos.json';
  private readonly http = inject(HttpClient);
  private readonly productos$ = this.http.get<Producto[]>(this.jsonUrl).pipe(shareReplay(1));

  getAll(): Observable<Producto[]> {
    return this.productos$;
  }

  getById(id: string): Observable<Producto | undefined> {
    return this.productos$.pipe(map(productos => productos.find(p => p.id === id)));
  }
}
