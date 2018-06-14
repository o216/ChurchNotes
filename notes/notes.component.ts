import { Component } from '@angular/core';
import { NotesService } from './notes.service';
import { Note } from './note/note';

@Component({
  selector: 'notes-list',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css'],
  providers: [NotesService],
})
export class NotesListComponent {
  notes: Note[];

  constructor(private notesService: NotesService){
    this.showNotes();
  };

  showNotes(): void{
    this.notesService
        .getNotes()
        .then(notes => {this.notes = notes;});
  }
}
