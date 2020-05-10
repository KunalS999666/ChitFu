    import { Component } from "@angular/core";
import { dashboardService } from "../services/dashboard.service";
import { HttpErrorResponse } from "@angular/common/http";
@Component({
    templateUrl:"./about.component.html"
})
export class AboutComponent{
    private result:any;
    constructor(private _service:dashboardService){
    }
    ngOnInit(){
        this._service.aboutData().subscribe(res=>{
            this.result = res;
        },(err:HttpErrorResponse)=>{
            if(err.error instanceof Error){
                console.log("Client Side Error !");
            }else{
                console.log("Server Side Error !");
            }
        });
    }
}