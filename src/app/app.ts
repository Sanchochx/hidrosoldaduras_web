import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { trigger, transition, style, animate, query } from '@angular/animations';

declare var AOS: any;

export const routeAnimation = trigger('routeAnimation', [
  transition('* <=> *', [
    query(':enter', [
      style({ opacity: 0, transform: 'translateY(20px)' }),
      animate('350ms cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        style({ opacity: 1, transform: 'translateY(0)' }))
    ], { optional: true }),
  ]),
]);

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, FooterComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  animations: [routeAnimation],
})
export class App implements OnInit {
  ngOnInit(): void {
    AOS.init({ duration: 800, once: true, offset: 80 });
  }

  getRouteState(outlet: RouterOutlet): string {
    return outlet.isActivated ? outlet.activatedRoute.snapshot.url.join('/') : '';
  }
}
