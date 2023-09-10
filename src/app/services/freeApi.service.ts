import {Injectable} from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient , HttpParams} from '@angular/common/http';

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
}