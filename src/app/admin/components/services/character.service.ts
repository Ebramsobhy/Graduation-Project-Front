// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';
// import { Character } from 'src/app/features/Interfaces/character'; 

// @Injectable({
//   providedIn: 'root',
// })
// export class CharacterService {
//   private apiUrl = 'https://example.com/api/characters';

//   constructor(private http: HttpClient) {}

//   getCharacters(): Observable<Character[]> {
//     return this.http.get<Character[]>(this.apiUrl);
//   }

//   getCharacter(id: number): Observable<Character> {
//     const url = `${this.apiUrl}/${id}`;
//     return this.http.get<Character>(url);
//   }

//   addCharacter(character: Character): Observable<Character> {
//     return this.http.post<Character>(this.apiUrl, character);
//   }

//   updateCharacter(character: Character): Observable<Character> {
//     const url = `${this.apiUrl}/${character._id}`;
//     return this.http.put<Character>(url, character);
//   }

//   deleteCharacter(id: number): Observable<Character> {
//     const url = `${this.apiUrl}/${id}`;
//     return this.http.delete<Character>(url);
//   }
// }
