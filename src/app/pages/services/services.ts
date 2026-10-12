import { Component } from '@angular/core';
import { PageHero } from '../../shared/page-hero/page-hero';
import { Capacites } from '../../shared/capacites/capacites';
import { Engagement } from '../../shared/engagement/engagement';
import { Quiz } from '../../shared/quiz/quiz';
import { Cta } from '../../shared/cta/cta';

@Component({
  selector: 'app-services',
  imports: [PageHero, Capacites, Engagement, Quiz, Cta],
  templateUrl: './services.html',
  styleUrl: './services.css',
})
export class Services {
  titre = "Our Services";
  breadcrumbs = [
    {
      label: "Services"
    }
  ];

  titreCta = "Not sure which service you need?";
  descriptionCta = "Book a free consultation and we'll help map out the right plan.";
  btnCta = "Book a Call";
}
