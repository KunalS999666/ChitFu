import { Component } from "@angular/core";
import { loginService } from "../services/login.service";
import { HttpErrorResponse } from "@angular/common/http";
import { Router } from "@angular/router";
@Component({
    templateUrl:"./login.component.html"
})
export class loginComponent{
    constructor(private _service:loginService,
                private _router:Router){}
    public login(arg1):any{
        console.log("KT check",arg1);
        this._service.authenticate(arg1).subscribe(res=>{
            if(res.status == "success"){
                window.localStorage.setItem("login_details",JSON.stringify(res));
                this._router.navigate(["/dashboard/about"]);
            }else{
                alert("Login Fail !");
            }
        },(err:HttpErrorResponse)=>{
            if(err.error instanceof Error){
                console.log("Client Side Error !");
            }else{
                console.log("Server Side Error !");
            }
        });
    }
}