import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PageHero } from '../../shared/page-hero/page-hero';

@Component({
  selector: 'app-service-details',
  imports: [RouterLink, PageHero],
  templateUrl: './service-details.html',
  styleUrl: './service-details.css',
})
export class ServiceDetails {
  titre = 'UI/UX Design';

  breadcrumbs = [
    {
      label: 'Services',
      link: '/services'
    },
    {
      label: 'UI/UX Design'
    }
  ];
}
