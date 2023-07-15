import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NoteService } from '../services/note.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private route: Router, private noteservice: NoteService) { };

  home() {
    this.route.navigate([""]);
  }

  dashboard() {
    this.route.navigate(["/dashboard"]);
  }

  logout() {
    this.noteservice.CanLogIn = false;
    this.route.navigate(['/login']);
  }

  regs() {
    this.noteservice.CanLogIn = false;
    this.route.navigate(['regs']);
  }

}
