import { Component } from "@angular/core";
import { Router } from "@angular/router";
@Component({
    templateUrl:"./dashboard.component.html"
})
export class DashboardComponent{
    constructor(private _router:Router){
    }
    public logout(){
        window.localStorage.removeItem("login_details");
        this._router.navigate(["/"]);
    }
}