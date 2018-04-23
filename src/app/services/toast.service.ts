import { Injectable } from '@angular/core';
import { Message} from '../dtos/messages';

@Injectable()
export class ToastService {

    
    messageList:Message[]=[];
    
    constructor() { }
    
    getMessages(){
        return this.messageList;
    }
    
    sendMessage(_content:string,_style:string){
        var msg=new Message(_content,_style);
        this.messageList.push(msg);
    }
    
    dismissMessage(msg:Message){
        let index=this.messageList.indexOf(msg);
        if(index>-1){
            this.messageList.splice(index,1);
        }
    }

}
