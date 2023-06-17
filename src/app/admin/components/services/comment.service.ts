// import { Injectable } from '@angular/core';
// import { Observable, of } from 'rxjs';
// import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { catchError, map, tap } from 'rxjs/operators';

// import { Comment } from '@angular/compiler'; 

// @Injectable({
//   providedIn: 'root',
// })
// export class CommentService {
//   private commentsUrl = 'api/comments';

//   httpOptions = {
//     headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
//   };

//   constructor(private http: HttpClient) {}

//   getComments(): Observable<Comment[]> {
//     return this.http
//       .get<Comment[]>(this.commentsUrl)
//       .pipe(catchError(this.handleError<Comment[]>('getComments', [])));
//   }

//   deleteComment(commentId: number): Observable<Comment> {
//     const url = `${this.commentsUrl}/${commentId}`;
//     return this.http
//       .delete<Comment>(url, this.httpOptions)
//       .pipe(catchError(this.handleError<Comment>('deleteComment')));
//   }

//   private handleError<T>(operation = 'operation', result?: T) {
//     return (error: any): Observable<T> => {
//       console.error(error);
//       return of(result as T);
//     };
//   }
// }
