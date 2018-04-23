import { Component,OnInit } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
    constructor() {
        
        
    }
    
    ngOnInit(): void{
        
    }
    
    openNav():void{
        $('#myNav').css("width","100%");
    }
    
    closeNav():void{
        $('#myNav').css("width","0%");
    }
}
