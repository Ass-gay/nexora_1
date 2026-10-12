import { Component } from '@angular/core';
import { PageHero } from '../../shared/page-hero/page-hero';
import { QuickAnswers } from '../../shared/quick-answers/quick-answers';

@Component({
  selector: 'app-contact',
  imports: [PageHero, QuickAnswers],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  titre = "Get In Touch";
  breadcrumbs = [
    {
      label: "Contact"
    }
  ];
}
