import { Component, EventEmitter, Output } from '@angular/core';
import { NoteService } from '../services/note.service';
import { Note } from '../models/note';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.css']
})

export class AddNoteComponent {

  note: Note = {};


  minDate = new Date();

  constructor(private noteService: NoteService, private _snackBar: MatSnackBar, private route: Router) { }

  onSubmit(data: any) {

    this.AddnewNote(this.note);

    this._snackBar.open('Note Updated successfully', 'success', {
      duration: 5000,
      panelClass: ['mat-toolbar', 'mat-primary']
    })
    this.route.navigate(['dashboard'])
  }


  AddnewNote(addNoteForm: Note) {

    this.noteService.addNote(this.note).subscribe({

      next: noteData => {
        addNoteForm = {};
      },
      error: err => {
        alert("Network error occurred, please try again later!!");
      }
    })
  }
}
