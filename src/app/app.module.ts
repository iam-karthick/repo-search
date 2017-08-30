import { NgModule }      from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { BrowserModule } from '@angular/platform-browser';
import { GithubService } from './component/github/github.service';
import { AppComponent }  from './app.component';
import { SearchComponent } from './component/search/search.component'

@NgModule({
  imports:      [ BrowserModule , HttpModule, FormsModule ],
  declarations: [ AppComponent,SearchComponent],
  bootstrap:    [ AppComponent ],
  providers:    [ GithubService ]
})
export class AppModule { }

