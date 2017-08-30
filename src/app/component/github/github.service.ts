import { Injectable } from '@angular/core';
import { Http} from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable()
  export class GithubService{

    constructor(private http:Http){

    }
    searchUser(name:string){
      if(name){
       return this.http.get('https://api.github.com/users/' +name ).map(res => res.json());
      }
    }

    searchRepos(name:string) {
      if(name) {
        return this.http.get('https://api.github.com/users/' + name+ '/repos').map(res => res.json());
      }
    }
  }

  