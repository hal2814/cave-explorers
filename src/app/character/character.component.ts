import { Component, OnInit } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2/database';
import { Router } from '@angular/router';
import { Character } from '../character.model';
import { CharacterService } from '../character.service';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css'],
  providers: [ CharacterService ]
})
export class CharacterComponent implements OnInit {
  characters: FirebaseListObservable<any[]>;
  characterToDisplay;
  dave;
  gram;
  timmy;
  larry;
  characterIndex;
  objectObservable;
  show = true;
  showChoice = false;
  items = [];

  constructor(private router: Router, private characterService: CharacterService) { }

  ngOnInit(){
    // this.characters = this.characterService.getCharacters();
    this.dave =
    this.characterService.getCharacterById(0);

    this.characterIndex = 1;
    this.gram =
    this.characterService.getCharacterById(1);

    this.characterIndex = 2;
    this.timmy =
    this.characterService.getCharacterById(2);

    this.characterIndex = 3;
    this.larry =
    this.characterService.getCharacterById(3);
    // this.objectObservable =
    // this.characterService.getCharacterById(this.characterIndex).subscribe(dataLastEmittedFromObserver=>{
    //   this.objectObservable = dataLastEmittedFromObserver;
    //   console.log(this.objectObservable);
    // });
  }

  selectCharacter(value){
    if(value==="dave"){
      this.characterToDisplay = this.dave;
    } else if(value==="gram"){
      this.characterToDisplay = this.gram;
    } else if(value === "timmy"){
      this.characterToDisplay = this.timmy;
    }else if(value === "larry"){
      this.characterToDisplay = this.larry;
    }
  }

}
