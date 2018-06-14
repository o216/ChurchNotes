import { Component} from '@angular/core';
import { NoteComponent } from './note.component'
import { Note } from './note';
import { ActivatedRoute } from '@angular/router';
import { NotesService } from '../notes.service';

@Component({
  selector: 'input-note',
  templateUrl: './input-note.component.html',
  styleUrls: ['./note.component.css'],
  providers: [NotesService],
})

export class InputNoteComponent extends NoteComponent {
  constructor(private route:ActivatedRoute, private notesService: NotesService){
    super();
    if(this.note != null && this.note.date == null){
      const now = new Date();
      this.note.date = now.getTime();
    }
  }

  addNote(): void{
    this.notesService.addNote(this.note);
  }

}
