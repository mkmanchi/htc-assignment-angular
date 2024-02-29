import { Component } from '@angular/core';
import { Post, TestendService } from '../services/testend.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cachepage',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cachepage.component.html',
  styleUrl: './cachepage.component.scss'
})
export class CachepageComponent {
  postsList: Post[] = [];
  isDataNotEmpty: boolean = false;

  constructor(private testService: TestendService){


  }

  ngOnInit(): void {
    this.testService.getBsCache().subscribe(data => {
      if(data.length === 0){
        this.testService.getPosts().subscribe((posts) => {
            this.testService.setBsCache(posts);
        });
      }
      this.postsList = data;
    });

    
  }
}
