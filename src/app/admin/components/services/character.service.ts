import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthenticationService } from 'src/app/core/authentication/authentication.service';
import { Character } from 'src/app/features/Interfaces/character';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {
  private baseUrl = 'http://localhost:5000/admin'; // Update the base URL

  constructor(private httpClient: HttpClient, private _AuthenticationService: AuthenticationService) { }

  getHeaders(): { [header: string]: string } {
    return { "access-token": `${this._AuthenticationService.getToken()}` };
  }


  getCharacters(): Observable<Character[]> {
    const url = `${this.baseUrl}/characters`;
    const requestOptions = { headers: this.getHeaders() };
    return this.httpClient.get<Character[]>(url, requestOptions);
  }

  getCharacterById(id: string): Observable<Character> {
    const url = `${this.baseUrl}/character/${id}`;
    const requestOptions = { headers: this.getHeaders() };
    return this.httpClient.get<Character>(url, requestOptions);
  }

  createCharacter(character: any): Observable<Character> {
    const url = `${this.baseUrl}/character`; // Use the updated URL
    const requestOptions = { headers: this.getHeaders() };
    return this.httpClient.post<Character>(url, character, requestOptions);
  }
  

  updateCharacter(id: string, character: Character): Observable<Character> {
    const url = `${this.baseUrl}/character/${id}`;
    const requestOptions = { headers: this.getHeaders() };
    return this.httpClient.put<Character>(url, character, requestOptions);
  }

  deleteCharacter(id: string): Observable<void> {
    const url = `${this.baseUrl}/character/${id}`;
    const requestOptions = { headers: this.getHeaders() };
    return this.httpClient.delete<void>(url, requestOptions);
  }
}
