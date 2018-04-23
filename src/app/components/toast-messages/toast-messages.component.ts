import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Message } from '../../dtos/messages';
import { ToastService } from '../../services/toast.service';

@Component({
  selector: 'app-toast-messages',
  templateUrl: './toast-messages.component.html',
  styleUrls: ['./toast-messages.component.css']
})
export class ToastMessagesComponent implements OnInit {

    messages:Message[]=[];
    constructor(private toast:ToastService) { }
    
    ngOnInit() {
        
    }
    
    getMessages(){
        this.messages=[];
        var msgList=this.toast.getMessages();
        msgList.forEach((msg:any)=>{
            this.messages.push(msg);
        });
        return this.messages;
    }

    dismiss(msg:Message){
        this.toast.dismissMessage(msg);
    }
}
