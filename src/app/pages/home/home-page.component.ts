import { Component } from '@angular/core';
import { HeroComponent } from '../../components/hero/hero.component';
import { CatalogoComponent } from '../../components/catalogo/catalogo.component';
import { AboutComponent } from '../../components/about/about.component';
import { ContactComponent } from '../../components/contact/contact.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [HeroComponent, CatalogoComponent, AboutComponent, ContactComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
})
export class HomePageComponent {}
