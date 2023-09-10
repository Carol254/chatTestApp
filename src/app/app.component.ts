import { Component } from '@angular/core';
import { freeApiService } from './services/freeApi.service';
import { Comments } from './classes/comments';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'chatTestApp';
  listComments:Comments[] = [];

  constructor(private _freeApiService:freeApiService){

  }
  
  ngOnInit(){
    this._freeApiService.getComments().subscribe(

      data =>{
        this.listComments = data;
      }
    );
  }
}
