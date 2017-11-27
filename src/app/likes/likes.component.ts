import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'likes',
  templateUrl: './likes.component.html',
  styleUrls: ['./likes.component.css']
})
export class LikesComponent implements OnInit {

  @Input("isLiked") isLiked:boolean;
  @Input("likesCount") likesCount:number;
  constructor() { }

  ngOnInit() {
  }

  onClick() {
    this.likesCount += this.isLiked? -1: 1;
    this.isLiked = !this.isLiked;
  }

}
