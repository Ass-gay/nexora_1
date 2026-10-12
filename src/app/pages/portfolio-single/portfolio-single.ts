import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PageHero } from '../../shared/page-hero/page-hero';

@Component({
  selector: 'app-portfolio-single',
  imports: [RouterLink, PageHero],
  templateUrl: './portfolio-single.html',
  styleUrl: './portfolio-single.css',
})
export class PortfolioSingle {

  titre = 'Payflow Dashboard Redesign';

  breadcrumbs = [
    {
      label: 'Portfolio',
      link: '/portfolio'
    },
    {
      label: 'Payflow'
    }
  ];
}
