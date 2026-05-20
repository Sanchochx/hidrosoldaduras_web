import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
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
  tabla_dimensiones: { [key: string]: number | string | null }[];
  vida_util: string;
}

@Injectable({ providedIn: 'root' })
export class ProductoService {
  private readonly jsonUrl = '/assets/data/productos.json';

  constructor(private http: HttpClient) {}

  getAll(): Observable<Producto[]> {
    return this.http.get<Producto[]>(this.jsonUrl);
  }

  getById(id: string): Observable<Producto | undefined> {
    return this.getAll().pipe(map(productos => productos.find(p => p.id === id)));
  }
}
