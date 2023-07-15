import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddNoteComponent } from './add-note/add-note.component';
import { AuthGuard } from './auth.guard';
import { CheckGuard } from './check.guard';
import { LoginComponent } from './login/login.component';
import { NoteDetailsComponent } from './note-details/note-details.component';
import { NoteViewComponent } from './note-view/note-view.component';
import { RegistrationComponent } from './registration/registration.component';

const routes: Routes = [
  {path:"",component:LoginComponent},
  {path:"regs",component:RegistrationComponent,canDeactivate:[CheckGuard]},
  {path:"notes/note-details/:id",component:NoteDetailsComponent},
  {path:"dashboard",component:NoteViewComponent,canActivate:[AuthGuard]},
  {path:"addNote", component:AddNoteComponent},
  {path:"**",component:LoginComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
