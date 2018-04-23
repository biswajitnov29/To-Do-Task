import { Injectable } from '@angular/core';
import { AppConfig } from '../configs/app.config';
import { GoogleApiService } from './google-api.service';

@Injectable()
export class TaskService {

    
    private request = 'tasks/v1/lists';
    
    constructor(private GoogleAPI:GoogleApiService) { }
    
    get(tasklist){
        return this.GoogleAPI.request({
          'path': `${AppConfig.googleTask.SCOPES}/${this.request}/${tasklist}/tasks`
        });
    }

}
