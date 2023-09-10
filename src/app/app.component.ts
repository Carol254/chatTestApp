import { Component } from '@angular/core';
import { freeApiService } from './services/freeApi.service';
import { Comments } from './classes/comments';
import { Posts } from './classes/posts';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'chatTestApp';
  listComments:Comments[] = [];
  listPost:Posts[] = [];
comm: any;

  constructor(private _freeApiService:freeApiService){

  }
  
  ngOnInit(){
    this._freeApiService.getComments().subscribe(

      data => {
        this.listComments = data;
      }
    );

    this._freeApiService.getPostByParameter().subscribe(
      data => {
        this.listPost = data;
    });
  }
}
