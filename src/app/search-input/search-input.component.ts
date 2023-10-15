import { Component, EventEmitter, Inject, OnDestroy, Output } from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { heroMagnifyingGlass } from '@ng-icons/heroicons/outline';
import { Subscription } from 'rxjs';
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
export class SearchInputComponent implements OnDestroy{

  constructor(@Inject(GithubService) readonly _githubService : GithubService){}
 

  @Output() childEvent = new EventEmitter<string  | GitHubUser >();

  private subscription : Subscription | null = null;

  handleKeyPress(event : KeyboardEvent){
    const target = event.target as HTMLInputElement; 
    if(event.key === 'Enter'){
      this.childEvent.emit("Fetching data");
      this.subscription = this._githubService.getUserData(target.value).subscribe({
        next: data => {
          this.childEvent.emit(data);
        },
        error: _ => {
          this.childEvent.emit("Fetching error");
        }
      });
    }
  }

  ngOnDestroy(): void {
   if(this.subscription){
    this.subscription.unsubscribe();
    }  
  }

}
