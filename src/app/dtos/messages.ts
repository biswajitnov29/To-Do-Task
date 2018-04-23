export class Message{
    content:string;
    style:string;
    dismissed:boolean=false;
    
    constructor(_content:string,_style:string){
        this.content=_content;
        this.style=_style||'info';
    }
}