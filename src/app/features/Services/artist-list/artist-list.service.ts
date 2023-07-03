import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Artist } from '../../../features/Interfaces/artists';

@Injectable({
  providedIn: 'root'
})
export class ArtistListService {

  private apiUrl = 'http://localhost:5000'; 

  constructor(private http: HttpClient) { }
  getArtists(): Observable<Artist[]> {
    return this.http.get<Artist[]>(`${ this.apiUrl }/artists`);
  }

  getArtistById(id: string): Observable<Artist> {
    const url = `${this.apiUrl}/artist/${id}`;
    return this.http.get<Artist>(url);
  }
}
