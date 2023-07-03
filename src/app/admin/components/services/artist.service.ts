import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Artist } from 'src/app/features/Interfaces/artists';
import { Observable } from 'rxjs';
import { AuthenticationService } from 'src/app/core/authentication/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class ArtistService {
  private baseUrl = 'http://localhost:5000/admin'; // Update the base URL

  constructor(private _HttpClient: HttpClient, private _AuthenticationService: AuthenticationService) { }

  getHeaders(): { [header: string]: string } {
    return { "access-token": `${this._AuthenticationService.getToken()}` };
  }

  getArtists(): Observable<Artist[]> {
    const url = `${this.baseUrl}/artists`; // Use the updated URL
    const requestOptions = { headers: this.getHeaders() };
    return this._HttpClient.get<Artist[]>(url, requestOptions);
  }

  getArtistById(id: string): Observable<Artist> {
    const url = `${this.baseUrl}/artist/${id}`; // Use the updated URL
    const requestOptions = { headers: this.getHeaders() };
    return this._HttpClient.get<Artist>(url, requestOptions);
  }

  createArtist(artist: any): Observable<Artist> {
    const url = `${this.baseUrl}/artist`; // Use the updated URL
    const requestOptions = { headers: this.getHeaders() };
    return this._HttpClient.post<Artist>(url, artist, requestOptions);
  }

  updateArtist(id: string, artist: Artist): Observable<Artist> {
    const url = `${this.baseUrl}/artist/${id}`; // Use the updated URL
    const requestOptions = { headers: this.getHeaders() };
    return this._HttpClient.put<Artist>(url, artist, requestOptions);
  }

  deleteArtist(id: string): Observable<void> {
    const url = `${this.baseUrl}/artist/${id}`; // Use the updated URL
    const requestOptions = { headers: this.getHeaders() };
    return this._HttpClient.delete<void>(url, requestOptions);
  }
}
