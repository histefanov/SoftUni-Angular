import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  private postService: PostService;

  constructor(postService: PostService) {
    this.postService = postService;
  }

  ngOnInit(): void {
    this.postService.getFiveMostRecentPosts()
      .subscribe((data: any) => {
        console.log(data);
      })
  }
}
