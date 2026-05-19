import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeroComponent } from './components/hero/hero.component';
import { AboutComponent } from './components/about/about.component';
import { CatalogoComponent } from './components/catalogo/catalogo.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';

declare var AOS: any;

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavbarComponent, HeroComponent, CatalogoComponent, AboutComponent, ContactComponent, FooterComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit {
  ngOnInit(): void {
    AOS.init({ duration: 800, once: true, offset: 80 });
  }
}
