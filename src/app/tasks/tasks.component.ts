import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';
import { TaskComponent } from "./task/task.component";
import { NewtaskComponent } from "./newtask/newtask.component";
import {type TaskAdd } from './newtask/task.model';
import {TasksService} from '../tasks/tasks.service'
@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewtaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input({required:true}) name!:string;
  @Input({required:true}) userId!:string;
  AddTask=false;
constructor(private taskService:TasksService){}  
  @Output() select=new EventEmitter();
 
  get selectedUserTask(){
    return this.taskService.getUserTasks(this.userId);
  }

  onStartAddingTask()

{
this.AddTask=true;
}
onCloseTask()
{
  this.AddTask=false;
}
}
