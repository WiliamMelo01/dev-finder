import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { GithubService } from './github-seacher.service';
import { HeaderModule } from './header/header.module';
import { LoadingModule } from './loading/loading.module';
import { SearchErrorModule } from './search-error/search-error.module';
import { SearchInputModule } from './search-input/search-input.module';
import { UserDataModule } from './user-data/user-data.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HeaderModule,
    SearchInputModule,
    LoadingModule,
    UserDataModule,
    SearchErrorModule,
    HttpClientModule
  ],
  providers: [GithubService],
  bootstrap: [AppComponent]
})
export class AppModule { }
