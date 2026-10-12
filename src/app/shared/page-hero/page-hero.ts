import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

export interface Breadcrumb {
  label: string;
  link?: string;
}

@Component({
  selector: 'app-page-hero',
  imports: [RouterLink],
  templateUrl: './page-hero.html',
  styleUrl: './page-hero.css',
})
export class PageHero {
  titre = input<string>('');
  breadcrumbs = input<Breadcrumb[]>([]);
}
