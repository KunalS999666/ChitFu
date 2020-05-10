import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
@Injectable()
export class loginService{
    constructor(private _http:HttpClient){}
    public authenticate(login_details):any{
        return this._http.post("http://localhost:8083/login",
                                login_details);
    }
}