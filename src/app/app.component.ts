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
  objPuts!: Posts;
  objPatch!: Posts;

  constructor(private _freeApiService:freeApiService){}
  
  ngOnInit(){
    // ********************************************* GET METHOD  WITHOUT PARAMS**************************************
    
    this._freeApiService.getComments().subscribe(

      data => {
        this.listComments = data;
      }
    );

     // ********************************************* GET METHOD  WITH PARAMS**************************************
    
     this._freeApiService.getPostByParameter().subscribe(
      data => {
        this.listPost = data;
        this.safetyCheck(()=> this.listPost[11].email);
    });


    // ********************************************* POST METHOD **************************************
    let opost = new Posts();

    opost.body = 'testBody';
    opost.title = 'testTitle';
    opost.postId = 5;

    this._freeApiService.post(opost).subscribe(
      data =>{
        this.listOpost = data;
      }
  );

    // ********************************************* PUT METHOD **************************************
    opost = new Posts();

    opost.body = 'new body updated';
    opost.userId = 2;
    opost.title = 'new Title';
    opost.id = 10;
    

    this._freeApiService.put(opost).subscribe(
      data =>{
        this.objPuts = data;
      }
    );

     // ********************************************* PATCH METHOD **************************************

      opost = new Posts();
      opost.title = 'patched the title';

      this._freeApiService.patch(opost).subscribe(
        data =>{
          this.objPatch = data;
        }
      )

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


