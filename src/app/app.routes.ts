import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home/home-page.component';
import { CatalogoPageComponent } from './pages/catalogo/catalogo-page.component';
import { ProductoDetalleComponent } from './pages/producto-detalle/producto-detalle.component';

export const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'catalogo/:categoria/:id', component: ProductoDetalleComponent },
  { path: 'catalogo/:categoria', component: CatalogoPageComponent },
  { path: '**', redirectTo: '' },
];
