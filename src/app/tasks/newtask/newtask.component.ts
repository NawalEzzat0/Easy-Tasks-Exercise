import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { type TaskAdd } from './task.model';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-newtask',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './newtask.component.html',
  styleUrl: './newtask.component.css'
})
export class NewtaskComponent {
@Input ({required:true}) userId!:string;
@Output() close= new EventEmitter<void>();
enteredTitle='';
enteredSummary='';
enteredDate='';
constructor(private taskData:TasksService){}
cancelTask()
{
  this.close.emit()
}
onSubmit()
{
this.taskData.addTask({
  title:this.enteredTitle,
  summary:this.enteredSummary,
  date:this.enteredDate,
},this.userId)
this.close.emit()

}
}
