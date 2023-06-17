import { Injectable } from '@angular/core';
import { Character } from '../../Interfaces/character';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  private apiUrl = 'http://localhost:5000';

  constructor(private http: HttpClient) { }

  getCharacters(): Observable<Character[]> {
    const url = `${this.apiUrl}/characters`;
    return this.http.get<Character[]>(url);
  }

  getCharacter(id: string): Observable<Character> {
    const url = `${this.apiUrl}/character/${id}`;
    return this.http.get<Character>(url);
  }
}
