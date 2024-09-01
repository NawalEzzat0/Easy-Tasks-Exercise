import { Component, Input, Output } from '@angular/core';
import { CardComponent } from "../../shared/card/card.component";
import { DatePipe } from '@angular/common';
import { TasksService } from '../tasks.service';
interface Task{
  id:string;
  userId:string;
  title:string;
  summary:string;
  dueDate:string;
}
@Component({
  selector: 'app-task',
  standalone: true,
  imports: [CardComponent,DatePipe],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  @Input({required:true}) tasks!:Task;
constructor(private taskData:TasksService){}

  onCompleteTask()
  {
    this.taskData.removeTask(this.tasks.id)
  }

}
