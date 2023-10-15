import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SearchInputComponent } from './search-input.component';



@NgModule({
  imports: [
    CommonModule,
    SearchInputComponent
  ],
  exports: [SearchInputComponent]
})
export class SearchInputModule { }
