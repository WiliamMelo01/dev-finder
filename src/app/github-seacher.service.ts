import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GitHubUser } from './interfaces/github_user';

@Injectable({providedIn: 'root'})
export class GithubService {
  constructor(private httpClient: HttpClient) { }


   userData = {};

  getUserData(username: string){
   return this.httpClient.get<GitHubUser>(`https://api.github.com/users/${username}`);
  }
  
}