import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Caricature } from 'src/app/features/Interfaces/caricature';
import { AuthenticationService } from 'src/app/core/authentication/authentication.service';

@Injectable({
    providedIn: 'root'
})
export class CaricatureService {

    private baseUrl = 'http://localhost:5000/admin'; // Update the base URL

    constructor(private http: HttpClient, private AuthenticationService: AuthenticationService) { }

    headers = { "access-token": `${this.AuthenticationService.getToken()}` };
    requestOptions = { headers: this.headers };

    getCaricatures(): Observable<Caricature[]> {
        const url = `${this.baseUrl}/caricatures`; // Use the updated URL
        return this.http.get<Caricature[]>(url, this.requestOptions);
    }

    addCaricature(caricature: Caricature): Observable<Caricature> {
        const url = `${this.baseUrl}/caricature`; // Use the updated URL
        return this.http.post<Caricature>(url, caricature, this.requestOptions);
    }

    updateCaricature(caricature: Caricature, id: string): Observable<any> {
        const url = `${this.baseUrl}/caricature/${id}`; // Use the updated URL
        return this.http.put(url, caricature, this.requestOptions);
    }

    deleteCaricature(id: string): Observable<Caricature> {
        const url = `${this.baseUrl}/caricature/${id}`; // Use the updated URL
        return this.http.delete<Caricature>(url, this.requestOptions);
    }
}
