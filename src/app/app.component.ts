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
  listOpost:Posts | undefined;

  constructor(private _freeApiService:freeApiService){}
  
  ngOnInit(){
    //get method without parameters
    this._freeApiService.getComments().subscribe(

      data => {
        this.listComments = data;
      }
    );

    //get method while using parameters
    this._freeApiService.getPostByParameter().subscribe(
      data => {
        this.listPost = data;

        // console.log('Accessing the 11th item ',this.listPost[11] && this.listPost[11].email);
        // if(this.listPost[11] && this.listPost[11].email){
        //   console.log(this.listPost[11].email);
        // }else {
        //   console.log('Could not find data');
        // }

        let titlePropery = this.safetyCheck(()=> this.listPost[11].email);

    });


    //using the post method
    let opost = new Posts();

    opost.body = 'testBody';
    opost.title = 'testTitle';
    opost.postId = 5;

    this._freeApiService.post(opost).subscribe(
      data =>{
        this.listOpost = data;
      }
    
  );
}

  safetyCheck(fn:any){
    try{
      return fn();
    } catch (e){
      console.log(e);
      return undefined;
    }
  }
}
