import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Note } from '../models/note';
import { NoteService } from '../services/note.service';


@Component({
  selector: 'app-note-view',
  templateUrl: './note-view.component.html',
  styleUrls: ['./note-view.component.css']
})
export class NoteViewComponent {

  myNotes: Note[] = [];

  flag: boolean = false;

  constructor(private noteservice: NoteService, private route: Router) { }

  ngOnInit() {
    this.noteservice.getNotes().subscribe({
      next: notes => {
        this.myNotes = notes;
      },
      error: err => alert("Failed to Fetch Notes due to Network Error!!!")
    })
  }

  onSearchTextChanged(event: any) {
    this.noteservice.getNotes().subscribe({
      next: notes => {
        if (event) {
          this.myNotes = notes.filter((searching) => searching.title?.startsWith(event));
        }
        else {
          this.myNotes = notes;
        }
      },
      error: err => alert("Search Failed!!!")
    })
  }

  show() {
    this.flag = !this.flag;
    if (this.flag) {
      this.route.navigate(['/addNote'])
    }
    else {
      this.route.navigate(['dashboard'])
    }
  }

}
