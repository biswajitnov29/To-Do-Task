import { Injectable } from '@angular/core';
import {
    Router, Resolve,
    ActivatedRouteSnapshot
} from '@angular/router';
import { WindowRefService } from './window-ref.service';
import { AuthService } from "./auth.service";

@Injectable()
export class AuthResolveService implements Resolve<any> {

  constructor(private authService: AuthService,
               private winRef: WindowRefService,
               private router: Router) { }
    
    resolve(route: ActivatedRouteSnapshot): Promise<any> {
        return this.authService.isSignedIn().then((data)=>{
            if(!data){
                this.authService.signIn().then((data:any)=>{
                    this.authService.listen((isSignedIn:any)=>{
                        console.log("isSignedIn = "+isSignedIn);
                        console.log('Native window obj', this.winRef.nativeWindow.gapi);
                    });
                });
            }
        });
    }

}
