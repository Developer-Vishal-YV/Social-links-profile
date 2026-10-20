import { Routes } from '@angular/router';
import { SocialLinksProfilePage } from './components/social-links-profile-page/social-links-profile-page';
import { NotFoundPage } from './components/not-found-page/not-found-page';

export const routes: Routes = [
  {
    path: "",
    component: SocialLinksProfilePage
  },
  {
    path: "**",
    component: NotFoundPage
  }
];
