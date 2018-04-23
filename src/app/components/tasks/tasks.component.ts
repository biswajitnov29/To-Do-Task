import { Component, OnInit,ChangeDetectorRef } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import { AppService } from '../../services/app.service';
import { Observable } from "rxjs/Observable";
import { AppConfig } from '../../configs/app.config';
import { TaskService } from "../../services/task.service";
import { ToastService } from "../../services/toast.service";

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

    
    TaskLists:any[]=[];
    taskList:any;
  constructor(private cdr:ChangeDetectorRef,
               private taskService:TaskService,
               private toast:ToastService,
               private route: ActivatedRoute) {
      this.route.params.subscribe( (params:any) => {
          this.taskList=params.id;
      });
  }

  ngOnInit() {
      this.getTaskList();
  }
    
    getTaskList():void{
        this.taskService.get(this.taskList).then((response:any)=>{
            this.updateTaskList(response.result.items);
        });
    }
    
    updateTaskList(items):void{
        items.forEach((item:any)=>{
            this.TaskLists.push({
                Id:item.id,
                Name:item.title
            });
        });
        this.cdr.detectChanges();
    }
addToaster():void{
    this.toast.sendMessage("Test Toaster","danger");
}
}
