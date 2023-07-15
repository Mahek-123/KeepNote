import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Note } from '../models/note';
import { NoteService } from '../services/note.service';

@Component({
  selector: 'app-note-details',
  templateUrl: './note-details.component.html',
  styleUrls: ['./note-details.component.css']
})
export class NoteDetailsComponent implements OnInit {

  constructor(private noteService: NoteService, private activatedRoute: ActivatedRoute, private route: Router) { }
  noteCard: Note = { title: "", content: "" };

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params => {
      let id = params.get("id") ?? 0;
      this.noteService.getNote(+id).subscribe(data => {
        this.noteCard = data;
      })
    })
  }

  editNote() {
    this.noteService.updateNote(this.noteCard?.id, this.noteCard).subscribe(data => {
      this.noteCard = data;
      alert("Note Updated!!")
      this.route.navigate(['/dashboard']);
    })
  }
}