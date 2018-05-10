import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Note } from './note';

@Injectable()
export class NotesService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private notesURL = 'api/';
  constructor(private http: Http) { }

  getNotes(): Promise<Note[]> {
    return this.http.get(this.notesURL)
               .toPromise()
               .then(response => {
                   const notes = [];
                   response.json().forEach(note => {
                     note.date = note.date.seconds;
                     notes.push(note);
                   });
                   return notes;
               })
               .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

}
