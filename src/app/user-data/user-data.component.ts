import { Component, Input } from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { heroBuildingOffice, heroMapPin } from '@ng-icons/heroicons/outline';
import { GitHubUser } from '../interfaces/github_user';
@Component({
  standalone:true,
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.sass'],
  imports: [NgIconComponent],
  viewProviders: [provideIcons({  heroMapPin, heroBuildingOffice })]
})
export class UserDataComponent {

  @Input() userData: GitHubUser = {
    avatar_url: "",
    bio: "",
    company: null,
    created_at: "",
    email: null,
    events_url: "",
    followers: 0,
    followers_url: "",
    following: 0,
    following_url: "",
    gists_url: "",
    gravatar_id: "",
    hireable: false,
    html_url: "",
    location: null,
    login: "",
    name: "",
    node_id: "",
    organizations_url: "",
    public_gists: 0,
    public_repos: 0,
    received_events_url: "",
    repos_url: "",
    site_admin: false,
    starred_url: "",
    subscriptions_url: "",
    twitter_username: null,
    type: "",
    updated_at: "",
    url: "",
    blog: '',
    id : 0
  };


  

}
