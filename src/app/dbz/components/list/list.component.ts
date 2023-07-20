import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent  {
  @Output()
  public onDeleteId: EventEmitter<string> = new EventEmitter();

  @Input()
  public characterList: Character[] =[
    {
      name: 'Trunks',
      power: 1000
    }
  ];

  onDeleteCharacter(id:string | undefined):void{
    console.log(id);
    this.onDeleteId.emit(id);
  }



}
