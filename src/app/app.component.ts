import { Component } from '@angular/core';
import { NotesService } from './notes.service';
import { Note } from './note';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [NotesService],
})
export class AppComponent {
  title = 'app works!';
  notes: Note[];

  constructor(private notesService: NotesService){};

  showNotes(): void{
    this.notesService
        .getNotes()
        .then(notes => {this.notes = notes; console.log(notes)});
  }
}
