import { Component } from '@angular/core';
import { GithubService } from '../github/github.service';
import {FormsModule } from '@angular/forms';

@Component({
  selector: 'search-app',
  templateUrl: `./search.component.html`,
})
export class SearchComponent  { 
  search:string;
  user:any;
  repos:any;
  constructor(private  gitserve :GithubService) {

  }
  onClick(){
      console.log(this.search)
      this.gitserve.searchUser(this.search).subscribe(res => {
      this.user=res;
      console.log(res);
    })
  }  
  onClickRepo(){
      this.gitserve.searchRepos(this.search).subscribe(res => {
      this.repos = res;
      console.log(res);
    })
  }
}  


