import { Component, EventEmitter, Inject, Output } from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { heroMagnifyingGlass } from '@ng-icons/heroicons/outline';
import { GithubService } from '../github-seacher.service';
import { GitHubUser } from '../interfaces/github_user';

@Component({
  standalone:true,
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.sass'],
  imports: [NgIconComponent],
  viewProviders: [provideIcons({ heroMagnifyingGlass })]
})
export class SearchInputComponent {

  constructor(@Inject(GithubService) readonly _githubService : GithubService){}

  @Output() childEvent = new EventEmitter<string  | GitHubUser >();

  userData = {};

  handleKeyPress(event : KeyboardEvent){
    const target = event.target as HTMLInputElement; 
    if(event.key === 'Enter'){
      this.childEvent.emit("Fetching data");
      const result =this._githubService.getUserData(target.value).subscribe(data => {
        this.userData = data;
        this.childEvent.emit(data);
      }, (_) => {
        this.childEvent.emit("Fetching error");
      });
    }
  }

}
