import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Caricature } from 'src/app/features/Interfaces/caricature';
import { AuthenticationService } from 'src/app/core/authentication/authentication.service';

@Injectable({
    providedIn: 'root'
})
export class CaricatureService {

    private apiUrl = 'http://localhost:5000/admin/caricature';

    constructor(private http: HttpClient, private AuthenticationService: AuthenticationService) { }

    headers = { "access-token": `${this.AuthenticationService.getToken()}` };
    requestOptions = { headers: this.headers };


    getCaricatures(): Observable<Caricature[]> {
        return this.http.get<Caricature[]>(this.apiUrl, this.requestOptions);
    }

    addCaricature(caricature: Caricature): Observable<Caricature> {
        return this.http.post<Caricature>(this.apiUrl, caricature, this.requestOptions);
    }

    updateCaricature(caricature: Caricature, id: string): Observable<any> {
        return this.http.put(this.apiUrl, caricature, this.requestOptions);
    }

    deleteCaricature(id: string): Observable<Caricature> {
        const url = `${this.apiUrl}/${id}`;
        return this.http.delete<Caricature>(url, this.requestOptions);
    }
}
