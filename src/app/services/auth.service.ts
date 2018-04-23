import { Injectable } from '@angular/core';
import { WindowRefService } from './window-ref.service';
import { GoogleApiService } from './google-api.service';
import { AppConfig } from '../configs/app.config';

@Injectable()
export class AuthService {

    window:any;
  constructor(private GoogleAPI:GoogleApiService,
               private windowRef:WindowRefService) {
      this.window=windowRef.nativeWindow;
  }
    
    signIn():Promise<any> {
        return new Promise((resolve, reject)=>{ 
            this.GoogleAPI.auth().then(()=> {
                this.window.gapi.auth2.getAuthInstance().signIn();
                resolve();
            },()=>{
                reject();
            });
            
        });
      };
    
    
    isSignedIn():Promise<any> {
        return new Promise((resolve, reject)=>{
            this.GoogleAPI.auth().then(()=> {
                resolve(this.window.gapi.auth2.getAuthInstance().isSignedIn.get());
            },()=>{
                reject();
            });
        });
      };
    
    listen(callback:any) {
        return new Promise((resolve, reject)=>{
            this.GoogleAPI.auth().then(()=> {
                this.window.gapi.auth2.getAuthInstance().isSignedIn.listen(callback);
                resolve();
            },()=>{
                reject();
            });
        });
      };
}
