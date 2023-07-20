import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid } from 'uuid'

@Injectable(
  {
    providedIn: 'root'
  })
export class DbzService {

  public characters: Character[] = [
    {
      id: uuid(),
      name: 'Krillin',
      power: 1000
    },
    {
      id: uuid(),
      name: 'Goku',
      power: 9500
    }
  ];

  onNewCharacter (character:Character){
    console.log("Main page");
    console.log(character);
    character.id=uuid();
    this.characters.push(character);
  }

  onDeleteCharacter (id:number){
    this.characters.splice(id, 1);
  }

  onDeleteCharacterById (id:string){
    this.characters= this.characters.filter(character => character.id !== id);
  }

}
