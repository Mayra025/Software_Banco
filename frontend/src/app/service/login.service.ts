import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Global } from "./global";
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class MasterService {
    public url:string;
    constructor(
        private _http:HttpClient,
    ){
        this.url=Global.url;
    }
    GetAllInvoice() {
        return this._http.get("http://localhost:8080/api/empleado/info");
    }
    login(credentias:any):Observable<any>{
        let params=JSON.stringify(credentias);
        let headers=new HttpHeaders().set('Content-Type','application/json');
        return this._http.post(this.url+'login',params,{headers:headers, withCredentials: true});
    }

    logout():Observable<any>{
        let headers=new HttpHeaders().set('Content-Type','application/json');
        return this._http.post(this.url+'logout',{},{headers:headers, withCredentials: true});
    }
}