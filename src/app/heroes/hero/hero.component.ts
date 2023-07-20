import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {

  public name:string = 'Ironman';
  public age:number = 40;

  constructor() { }

  ngOnInit(): void {
  }

  get capitalizedName():string{
    return this.name.toUpperCase();
  }

  getHerodescription():string{
    return `${ this.name } - ${ this.age }`;
  }

  public changeName():void{
    this.name="Spiderman";
  }

  public changeAge():void{
    this.age=25;
  }

  public resetForm():void{
    this.name="Ironman";
    this.age=40;
  }

}
