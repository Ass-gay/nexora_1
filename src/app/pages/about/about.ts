import { Component } from '@angular/core';
import { PageHero } from '../../shared/page-hero/page-hero';
import { Motive } from '../../shared/motive/motive';
import { Direction } from '../../shared/direction/direction';
import { Cta } from '../../shared/cta/cta';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [PageHero, Motive, Direction, Cta],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {
  titre = "About Nexora";
  breadcrumbs = [
    {
      label: "About"
    }
  ];

  titreCta = "Want to work with us?";
  descriptionCta = "We're currently accepting 3 new partners for Q3 2026.";
  btnCta = "Get in Touch";
}
