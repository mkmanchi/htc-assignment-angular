import { Component, OnInit } from '@angular/core';
import { Post, TestendService } from '../services/testend.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-newpage',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './newpage.component.html',
  styleUrl: './newpage.component.scss'
})
export class NewpageComponent implements OnInit {

  postsList: Post[] = [];

  constructor(private testService: TestendService){
    
  }
  ngOnInit(): void {
    this.testService.getBsCache().subscribe(posts => {
      this.postsList = posts;
    })
  }
}
