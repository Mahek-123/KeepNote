import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  searchText: string = "";

  @Output()
  searchTextChanged: EventEmitter<any> = new EventEmitter<any>();

  searchNote() {
    this.searchTextChanged.emit(this.searchText);
  }

  search() {
    if (this.searchText == "") {
      this.searchTextChanged.emit(this.searchText);
    }
  }
}
