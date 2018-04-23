import { Injectable } from '@angular/core';
import { WindowRefService } from './window-ref.service';
import { AppConfig } from '../configs/app.config';
import { Observable } from 'rxjs';

@Injectable()
export class GoogleApiService {

    window:any;
  constructor(private windowRef:WindowRefService) {
      this.window=windowRef.nativeWindow;
  }
    
    // Run until the `gapi` became to be defined
      gapi():any {
        return new Promise((resolve, reject)=> {
            if(this.window.gapi) {
                resolve();
            }
            
        });
      };
    
    
    load(){
        return Observable.timer(100).take(2).flatMap((i:any)=> this.gapi());
    }
    
    
    auth():Promise<any>{
        return new Promise((resolve, reject)=> {
            this.load().subscribe(()=>{
            this.window.gapi.load('client:auth2', ()=> {
            this.window.gapi.client.init({
              discoveryDocs: AppConfig.googleTask.DISCOVERY_DOCS,
              clientId: AppConfig.googleTask.client_id,
              scope: `${AppConfig.googleTask.SCOPES}/auth/tasks`
            }).then(function (response) {
                resolve();
            }, function(reason) {
              reject();
            });
          });
            });
        })
        
        
    };
    
    request(params:any):Promise<any>{
        return new Promise((resolve, reject)=> {
            
            this.auth().then(()=>{
                
                if(!this.window.gapi.auth2.getAuthInstance().isSignedIn.get()) {
                    // deferred.reject('auth needed');
                } else {
                    this.window.gapi.client.request(params).then( (response)=> {
                        resolve(response);
                    }, (reason)=> {
                        reject(reason);
                    });
                }
            }).catch(()=>{
                
            })
            
        });
        
    }

}
