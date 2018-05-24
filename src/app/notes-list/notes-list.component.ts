import { Component } from '@angular/core';
import { NotesService } from '../notes.service';
import { Note } from '../note';

@Component({
  selector: 'notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.css'],
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
