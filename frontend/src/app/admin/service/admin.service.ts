import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Global } from "../../service/global";
import { Observable } from 'rxjs';

@Injectable()
export class AdminService {
    public url:string;
    private _headers: HttpHeaders
    constructor(
        private _http:HttpClient,
    ){
        this.url=Global.url+"administrador/";
        this._headers = new HttpHeaders().set('Content-Type','application/json');
    }

    testConnection(direction:string):Observable<any>{
        return this._http.get(direction);
    }

    getInfo():Observable<any>{
        return this._http.get(this.url+'info', {headers:this._headers, withCredentials: true});
    }

    getEmpleados():Observable<any>{
        return this._http.get(this.url+'empleados', {headers:this._headers, withCredentials: true});
    }

    addEmpleado(empleado:any):Observable<any>{
        let params=JSON.stringify(empleado);
        return this._http.post(this.url+'empleados',params,{headers:this._headers, withCredentials: true});
    }

    updateEmpleado(empleado:any, id:string):Observable<any>{
        let params=JSON.stringify(empleado);
        return this._http.put(`${this.url}empleados/${id}`,params,{headers:this._headers, withCredentials: true});
    }

    deleteEmpleado(id:string):Observable<any>{
        return this._http.delete(`${this.url}empleados/${id}`,{headers:this._headers, withCredentials: true});
    }

    getBancos():Observable<any>{
        return this._http.get(this.url+'bancos', {headers:this._headers, withCredentials: true});
    }

    addBanco(banco:any):Observable<any>{
        let params=JSON.stringify(banco);
        return this._http.post(this.url+'bancos',params,{headers:this._headers, withCredentials: true});
    }

    updateBanco(banco:any, id:string):Observable<any>{
        let params=JSON.stringify(banco);
        return this._http.put(`${this.url}bancos/${id}`,params,{headers:this._headers, withCredentials: true});
    }

    deleteBanco(id:string):Observable<any>{
        return this._http.delete(`${this.url}bancos/${id}`,{headers:this._headers, withCredentials: true});
    }

}