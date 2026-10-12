import { Component } from '@angular/core';
import { PageHero } from '../../shared/page-hero/page-hero';
import { Cta } from '../../shared/cta/cta';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-portfolio',
  imports: [PageHero, Cta, RouterLink],
  templateUrl: './portfolio.html',
  styleUrl: './portfolio.css',
})
export class Portfolio {
  titre = "Our Portfolio";
  breadcrumbs = [
    {
      label: "Portfolio"
    }
  ];

  titreCta = "Have a project in mind?";
  descriptionCta = "Let's discuss how we can bring it to life.";
  btnCta = "Start a Project";
}
