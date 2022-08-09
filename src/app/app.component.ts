import { Component } from '@angular/core';
import arrayWords from "../utils/words"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'word-genertor';

  words = ''

  limit = 10;


  handleSlideChange(newLimit : number){
    this.limit = newLimit;
  }

  generate(){
    this.words = arrayWords.slice(0,this.limit).join(" ");
  }

  generateRandom(){
    let random:number = Math.trunc(Math.random()*50);
    this.words = arrayWords.slice(0,random).join(" ");
  }
  



}
