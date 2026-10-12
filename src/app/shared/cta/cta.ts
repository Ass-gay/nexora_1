import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cta',
  imports: [RouterLink],
  templateUrl: './cta.html',
  styleUrl: './cta.css',
})
export class Cta {
  titreCta = input<string>();
  descriptionCta = input<string>();
  btnCta = input<string>();
}
