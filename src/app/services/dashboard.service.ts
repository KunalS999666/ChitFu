import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
@Injectable()
export class dashboardService{
    constructor(private _http:HttpClient){}
    public aboutData():any{
        var obj = window.localStorage.getItem("login_details");
        var token = (JSON.parse(obj)).token;
        return this._http.post("http://localhost:8083/about",
                {'token':token});
    }
    public contactData():any{
        var obj = window.localStorage.getItem("login_details");
        var token = (JSON.parse(obj)).token;
        return this._http.post("http://localhost:8083/contact",
                {'token':token});
    }
    public portfolioData():any{
        var obj = window.localStorage.getItem("login_details");
        var token = (JSON.parse(obj)).token;
        return this._http.post("http://localhost:8083/portfolio",
                {'token':token});
    }
}