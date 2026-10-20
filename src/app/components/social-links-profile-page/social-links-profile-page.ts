import { Component } from '@angular/core';

type social_media_app = {
  app_name: string;
  app_link: string;
}

@Component({
  imports: [],
  selector: 'app-social-links-profile-page',
  styleUrl: './social-links-profile-page.css',
  templateUrl: './social-links-profile-page.html',
})
export class SocialLinksProfilePage {

  user_image_link: string = "images/avatar-jessica.jpeg";
  user_image_description: string = "I have attached user image.";

  user_name: string = "Jessica Randall";

  location: string = "London, United Kingdom";

  bio_description: string = "\"Front-end developer and avid reader.\"";

  social_media_apps: social_media_app[] = [
    {
      app_name: "GitHub",
      app_link: "https://github.com/"
    },
    {
      app_name: "Frontend Mentor",
      app_link: "https://www.frontendmentor.io/"
    },
    {
      app_name: "LinkedIn",
      app_link: "https://in.linkedin.com/"
    },
    {
      app_name: "Twitter",
      app_link: "https://x.com/"
    },
    {
      app_name: "Instagram",
      app_link: "https://www.instagram.com/"
    }
  ]

}
