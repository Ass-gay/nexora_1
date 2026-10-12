import { Component } from '@angular/core';
import { PageHero } from '../../shared/page-hero/page-hero';
import { Faq } from '../../shared/faq/faq';

@Component({
  selector: 'app-pricing',
  imports: [PageHero, Faq],
  templateUrl: './pricing.html',
  styleUrl: './pricing.css',
})
export class Pricing {
  titre = "Simple, Transparent Pricing";
  breadcrumbs = [
    {
      label: "Pticing"
    }
  ];
}
