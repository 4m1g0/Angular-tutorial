import { FavouriteChangedArgs } from './../favourite/favourite.component';
import { AuthorsService } from './../authors.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent {
  authors;
  isActive = false;
  email2:string;
  title = "Test authors";
  date = new Date(2017,3,1);
  titleValue = "";

  post = {
    title: "title",
    isFavourite: true
  }

  tweet = {
    body: "this is the tweet",
    isLiked: false,
    likesCount: 0
  }

  constructor(service: AuthorsService) {
    this.authors = service.getAuthors();
   }

  onSave($event){
    $event.stopPropagation();
    console.log("clicked", $event);
  }

  onKeyUp(value) {
    console.log("enter pressed " + value);
  }

  onKeyUp2() {
    console.log("test " + this.email2);
  }

  onFavouriteChanged(state: FavouriteChangedArgs){
    console.log("favourite changed" + state.value);
  }
}
