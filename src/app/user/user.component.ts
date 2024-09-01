import { Component,Input, Output ,EventEmitter } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';
import { CardComponent } from "../shared/card/card.component";

interface User{
  id:string;
  avatar:string;
  name:string;
}
const randomIndex=Math.floor(Math.random()*DUMMY_USERS.length)
@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  @Input({required:true}) user!:User;
  @Input ({required:true}) selected!:boolean;
 
  @Output() select=new EventEmitter();
  get imagePath(){
    return "assets/users/"+this.user.avatar;

  }
  onSelectUser()
  {
    this.select.emit(this.user.id);
    

  }

}
