import { Component, Input, OnInit} from '@angular/core';
import { Note } from './note';

@Component({
  selector: 'note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css'],
})

export class NoteComponent implements OnInit {
  @Input() noteData;
  note: Note;

  constructor() {}

  ngOnInit() {
    this.note = this.noteData;
    if(this.note == undefined){
      this.note = new Note();
      const date = new Date();
      this.note.date = date.getTime();
    }
  }


}
