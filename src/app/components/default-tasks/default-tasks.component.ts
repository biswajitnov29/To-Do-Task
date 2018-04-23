import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { TaskListService } from "../../services/task-list.service";
import { TaskService } from "../../services/task.service";
import * as $ from 'jquery';

@Component({
  selector: 'app-default-tasks',
  templateUrl: './default-tasks.component.html',
  styleUrls: ['./default-tasks.component.css']
})
export class DefaultTasksComponent implements OnInit {

    tasks:any[]=[];
  constructor(private cdr:ChangeDetectorRef,
               private taskListService:TaskListService,
              private taskService:TaskService) { }

  ngOnInit() {
      this.getFirstTaskList();
  }
    
    getFirstTaskList(){
        this.taskListService.get().then((response:any)=>{
            var taskList=response.result.items[0];
            this.taskService.get(taskList.id).then((response:any)=>{
                this.tasks=response.result.items;
            });
        });
    }

    toggle(id){
        $('#'+id).toggle();
    }
}
