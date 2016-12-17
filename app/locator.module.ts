import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule, Validators  }   from '@angular/forms';
import { Locator }  from './locator.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, ReactiveFormsModule  ],
  declarations: [ Locator ],
  bootstrap:    [ Locator ]
})
export class LocatorModule { }
