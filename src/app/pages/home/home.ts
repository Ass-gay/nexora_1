import { Component } from '@angular/core';
import { Hero } from '../../shared/hero/hero';
import { Partenaire } from '../../shared/partenaire/partenaire';
import { WeDo } from '../../shared/we-do/we-do';
import { Use } from '../../shared/use/use';
import { Process } from '../../shared/process/process';
import { ViewFolio } from '../../shared/view-folio/view-folio';
import { Testimonials } from '../../shared/testimonials/testimonials';
import { Cta } from '../../shared/cta/cta';

@Component({
  selector: 'app-home',
  imports: [Hero, Partenaire, WeDo, Use, Process, ViewFolio, Testimonials, Cta],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  titreCta = "Ready to build something great?";
  descriptionCta = "Book a free 30-minute strategy call — no pressure, no sales script.";
  btnCta = "Book a Call";
}
