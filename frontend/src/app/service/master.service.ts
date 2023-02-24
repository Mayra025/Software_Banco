import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http'
@Injectable({
    providedIn: 'root'
})
export class MasterService {

    constructor(private http: HttpClient) { }


    GetAllInvoice() {
        return this.http.get("http://localhost:8080/api/empleado/info");
    }




}