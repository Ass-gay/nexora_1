import { Component } from '@angular/core';
import { PageHero } from '../../shared/page-hero/page-hero';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-blog',
  imports: [PageHero, RouterLink],
  templateUrl: './blog.html',
  styleUrl: './blog.css',
})
export class Blog {
  titre = "Insights & Resources";
  breadcrumbs = [
    {
      label: "Blog"
    }
  ];
}
