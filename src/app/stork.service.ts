import { MessageService } from './message.service';
import { Stork } from './storks';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { stringify } from '@angular/compiler/src/util';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StorkService {


  private url = "http://localhost:7000/stork"
  constructor(
    private messageService: MessageService, 
    private http: HttpClient,
  ) { }

  /** Log a HeroService message with the MessageService */
private log(message: string) {
  this.messageService.add(`Service: ${message}`);
}

/**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
 private handleError<T>(operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {

    // TODO: send the error to remote logging infrastructure
    console.error(error); // log to console instead

    // TODO: better job of transforming error for user consumption
    this.log(`${operation} failed: ${error.message}`);

    // Let the app keep running by returning an empty result.
    return of(result as T);
  };
}

 //Http Options for adding new information
 httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


  /** POST: add a new hero to the server */
  addStork(stork: Stork): Observable<Stork> {
    return this.http.post<Stork>(this.url, stork).pipe(
      tap((newStork: Stork) => this.log(`added stork w/ id=${newStork.storkId}`)),
      catchError(this.handleError<Stork>('addUser'))
    );
  }
    
  //fetch data from the database
  getStork(): Observable<Stork[]> {
    return this.http.get<any[]>(this.url, {responseType: "json"})
    .pipe(tap((_)=> console.log("fetched users")) ,catchError(this.handleError<any[]>('getUser', []))
   );
     //this.messageService.add('HeroService: fetched heroes');
    // return users
   }

}


