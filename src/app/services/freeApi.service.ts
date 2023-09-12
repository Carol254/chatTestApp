import {Injectable} from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient , HttpParams} from '@angular/common/http';
import { Posts } from '../classes/posts';

@Injectable()
export class freeApiService
{
    constructor(private httpClient: HttpClient){}

    getComments(): Observable<any>{
        return this.httpClient.get("https://jsonplaceholder.typicode.com/comments");
    }

    getPostByParameter():Observable<any>{
        let params1 = new HttpParams().set('postId','1');
        return this.httpClient.get("https://jsonplaceholder.typicode.com/comments?postId=1",{params:params1});
    }

    post(opost:Posts):Observable<any>{
        return this.httpClient.post("https://jsonplaceholder.typicode.com/posts",opost);
    }

    put(opost:Posts):Observable<any>{

        return this.httpClient.put("https://jsonplaceholder.typicode.com/posts/1",opost);
    }
}