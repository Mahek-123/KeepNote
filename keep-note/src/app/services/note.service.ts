import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Note } from 'src/app/models/note';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class NoteService {

  URL: string = "http://localhost:3000/notes";

  userURL: string = " http://localhost:3001/users";

  CanLogIn: boolean = false;

  constructor(private http: HttpClient) { }

  getNotes(): Observable<Array<Note>> {
    return this.http.get<Array<Note>>(this.URL);
  }

  addNote(newNote: Note) {
    return this.http.post<Note>(this.URL, newNote)
  }

  addUser(newUser: any) {
    return this.http.post(this.userURL, newUser)
  }

  getUser(): Observable<Array<any>> {
    return this.http.get<any>(this.userURL);
  }

  updateNote(id?: number, updatedNote?: Note) {
    return this.http.put<Note>(`${this.URL}/${id}`, updatedNote);
  }

  getNote(id?: number): Observable<Note> {
    return this.http.get<Note>(`${this.URL}/${id}`);
  }

  deleteNote(id?: number) {
    return this.http.delete<Note>(`${this.URL}/${id}`);
  }

}
