import { Component } from '@angular/core';
import { GitHubUser } from './interfaces/github_user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {

  public isLoading = false;
  public hasData = false;
  public hasError = false;

  userData: GitHubUser = {
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

  receiveEvent(event : string | GitHubUser){
    if(typeof event !== "string"){

      this.isLoading = false;
      this.hasError = false;
      this.hasData = true;
      this.userData = event;
      this.userData.created_at = this.getDateFormatted(event.created_at);
      return;
    }

      if(event === "Fetching data"){
        this.isLoading = true;
        this.hasData = false;
        this.hasError = false;
        return;
      }

      this.isLoading =false;
      this.hasData = false;
      this.hasError = true;
      return;
      
  }

  private getDateFormatted(unformattedDate: string){
    const date = new Date(unformattedDate);

  const formattedDate = `${date.getDate()} ${this.getFormattedMonth(date.getMonth())} ${date.getFullYear()}`;
    return formattedDate;

  }

  private getFormattedMonth(month : number){
    const months = ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"];
    return months[month];
  }

}
