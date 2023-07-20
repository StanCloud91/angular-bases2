import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  public heroes:string[]=['Spiderman','Ironman','Otro']
  public deleteHero?: string;
  constructor() { }

  ngOnInit(): void {
  }

  removeLastHero():void{
    this.deleteHero=this.heroes.pop();
    //console.log(deleteHero);
  }

}
