import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PageHero } from '../../shared/page-hero/page-hero';

@Component({
  selector: 'app-blog-details',
  imports: [RouterLink, PageHero],
  templateUrl: './blog-details.html',
  styleUrl: './blog-details.css',
})
export class BlogDetails {

  titre = 'How to Build a Product Roadmap That Survives Contact With Reality';

  breadcrumbs = [
    {
      label: 'Blog',
      link: '/blog'
    },
    {
      label: 'Roadmap Article'
    }
  ];
}
