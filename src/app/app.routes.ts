import { Routes } from '@angular/router';
import { MainLayout } from './layout/main-layout/main-layout';
import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { Services } from './pages/services/services';
import { Portfolio } from './pages/portfolio/portfolio';
import { Blog } from './pages/blog/blog';
import { Pricing } from './pages/pricing/pricing';
import { Contact } from './pages/contact/contact';
import { ServiceDetails } from './pages/service-details/service-details';
import { PortfolioSingle } from './pages/portfolio-single/portfolio-single';
import { BlogDetails } from './pages/blog-details/blog-details';

export const routes: Routes = [
  {
    path: '',
    component: MainLayout,
    children: [
      {
        path: '',
        component: Home,
      },

      {
        path: 'about',
        component: About,
      },

      {
        path: 'services',
        component: Services,
      },

      {
        path: 'portfolio',
        component: Portfolio,
      },

      {
        path: 'blog',
        component: Blog,
      },

      {
        path: 'pricing',
        component: Pricing,
      },

      {
        path: 'contact',
        component: Contact,
      },

      {
        path: 'service-details',
        component: ServiceDetails,
      },

      {
        path: 'portfolio-single',
        component: PortfolioSingle,
      },

      {
        path: 'blog-details',
        component: BlogDetails,
      },
    ]
  }
];
