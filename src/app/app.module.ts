import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { NotesListComponent } from './notes/notes.component';
import { InputNoteComponent } from './notes/note/input-note.component';
import { NoteComponent } from './notes/note/note.component';
import { RouterModule, Routes }   from '@angular/router';

const routes: Routes = [
  { path: '', component: NotesListComponent },
  { path: 'add', component: InputNoteComponent },
  { path: 'edit', component: InputNoteComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    NotesListComponent,
    InputNoteComponent,
    NoteComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes, { useHash: false })
  ],
  exports: [
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
