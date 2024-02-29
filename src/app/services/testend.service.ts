import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Observable } from 'rxjs/internal/Observable';

export interface Post{
  userId: number;
  id: number,
  body: string,
  title: string
}

@Injectable({
  providedIn: 'root'
})
export class TestendService {
  private bsCache = new BehaviorSubject<Post[]>([]);

  constructor(private httpClient: HttpClient) { }

  getPosts(): Observable<Post[]> {
    return this.httpClient.get<Post[]>('https://jsonplaceholder.typicode.com/posts');
  }

  setBsCache(posts: Post[]){
    this.bsCache.next(posts);
  }

  getBsCache(){
    return this.bsCache;
  }
}
