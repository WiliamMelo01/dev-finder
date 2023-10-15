import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UserDataComponent } from './user-data.component';

@NgModule({
  declarations: [
    
  ],
  imports: [
    CommonModule,
    UserDataComponent
  ],
  exports: [UserDataComponent]
})
export class UserDataModule { }
