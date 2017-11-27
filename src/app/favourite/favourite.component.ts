import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.css']
})
export class FavouriteComponent implements OnInit {

  @Input('is-favourite') favourite:Boolean;
  @Output('change') change2 = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  
  setFavorite($event) {
    this.favourite = !this.favourite;
    this.change2.emit({value: this.favourite});
  }

}

export interface FavouriteChangedArgs {
  value: Boolean
}
