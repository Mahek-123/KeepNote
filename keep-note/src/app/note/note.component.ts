import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Note } from '../models/note';
import { NoteService } from '../services/note.service';
import { RouterService } from '../services/router.service';


@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent {

  @Input()
  noteCard: Note = {};

  constructor(private noteService: NoteService, private routerservice: RouterService) { }

  deleteNote() {
    this.noteService.deleteNote(this.noteCard.id).subscribe(data => {
      alert("Note Deleted!!!");
      this.routerservice.toHome();
    })
  }

}
