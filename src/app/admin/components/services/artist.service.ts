import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Artist } from 'src/app/features/Interfaces/artists';
import { Observable } from 'rxjs';
import { AuthenticationService } from 'src/app/core/authentication/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class ArtistService {
  private apiUrl = 'http://localhost:5000/artist';

  constructor(private _HttpClient: HttpClient, private _AuthenticationService: AuthenticationService) { }

  getHeaders(): { [header: string]: string } {
    return { "access-token": `${this._AuthenticationService.getToken()}` };
  }

  getArtists(): Observable<Artist[]> {
    const requestOptions = { headers: this.getHeaders() };
    return this._HttpClient.get<Artist[]>(this.apiUrl, requestOptions);
  }

  createArtist(artist: Artist): Observable<Artist> {
    const requestOptions = { headers: this.getHeaders() };
    return this._HttpClient.post<Artist>(this.apiUrl, artist, requestOptions);
  }

  updateArtist(id: string, artist: Artist): Observable<Artist> {
    const url = `${this.apiUrl}/${id}`;
    const requestOptions = { headers: this.getHeaders() };
    return this._HttpClient.put<Artist>(url, artist, requestOptions);
  }

  deleteArtist(id: string): Observable<void> {
    const url = `${this.apiUrl}/${id}`;
    const requestOptions = { headers: this.getHeaders() };
    return this._HttpClient.delete<void>(url, requestOptions);
  }
}
