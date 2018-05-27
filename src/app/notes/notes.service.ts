import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Note } from './note/note';

@Injectable()
export class NotesService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private notesURL = 'api/';
  constructor(private http: Http) { }

  getNotes(): Promise<Note[]> {
    return this.http.get(this.notesURL + 'all')
               .toPromise()
               .then(response => {
                   const notes = [];
                   response.json().forEach(note => {
                     notes.push(note);
                   });
                   return notes;
               })
               .catch(this.handleError);
  }

  addNote(data): Promise<boolean> {
    return this.http.post(this.notesURL + 'add', data, this.headers)
               .toPromise()
               .then(response => {
                   return response;
               })
               .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

}
