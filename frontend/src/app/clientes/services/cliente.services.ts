import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Global } from "../../service/global";
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class ClienteService {
    public url:string;
    private _headers: HttpHeaders;
    private cuenta:BehaviorSubject<any> = new BehaviorSubject<any>(null);

    constructor(
        private _http:HttpClient,
    ){
        this.url=Global.url+"cliente/";
        this._headers = new HttpHeaders().set('Content-Type','application/json');
    }

    public getCta(){
        return this.cuenta.asObservable();
      }
    
    public updateCta(cta:any){
        this.cuenta.next(cta);
    }

    getInfo():Observable<any>{
        return this._http.get(this.url+'info', {headers:this._headers, withCredentials: true});
    }

    getMisCuentas():Observable<any>{
        return this._http.get(this.url+'cuentas', {headers:this._headers, withCredentials: true});
    }

    getMiCuenta(id:string):Observable<any>{
        return this._http.get(`${this.url}cuentas/${id}`, {headers:this._headers, withCredentials: true});
    }

    getOtrasCuentas(id:string):Observable<any>{
        return this._http.get(`${this.url}cuentas/${id}/otras`, {headers:this._headers, withCredentials: true});
    }

    transferToCuentaInt(transfer:any, id:string):Observable<any>{
        let params=JSON.stringify(transfer);
        return this._http.post(`${this.url}cuentas/${id}/transferir/interno`,params,{headers:this._headers, withCredentials: true});
    }

    transferToCuentaExt(transfer:any, id:string):Observable<any>{
        let params=JSON.stringify(transfer);
        return this._http.post(`${this.url}cuentas/${id}/transferir/externo`,params,{headers:this._headers, withCredentials: true});
    }

    getBancos():Observable<any>{
        return this._http.get(this.url+'bancos', {headers:this._headers, withCredentials: true});
    }
}