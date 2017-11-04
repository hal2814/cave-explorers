import { Component, OnInit } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2/database';
import { Router } from '@angular/router';
import { Item } from '../item.model';
import { Character } from '../character.model';
import { Monster } from '../monster.model';
import { Cave } from '../cave.model';
import { ItemService } from '../item.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
  providers: [ ItemService ]
})
export class ItemComponent implements OnInit {
  items: FirebaseListObservable<any[]>;
  caveItems = [];
  characterItems = [];
  inventory = [];
  death = false;
  showChoice = false;
  show = true;
  itemShow = false;
  searchShow = true;
  addShow = false;
  sameItemShow = false;
  monShow = false;
  showLeftRight = false;
  attackShow = false;
  battleShow = false;
  walkShow = false;
  caveToDisplay;
  characterToDisplay;
  monsterToDisplay;
  itemToDisplay;
  caveObservable;
  characterObservable;
  itemObservable;
  monsterObservable;
  caveIndex;
  dave;
  gram;
  timmy;
  larry;
  characterIndex;
  monsterIndex;
  health;
  strength;
  armor;
  monHealth;
  monStrength;
  monArmor;



  constructor(private router: Router, private itemService: ItemService) { }

  ngOnInit() {
    this.dave =
    this.itemService.getCharacterById(0);

    this.gram =
    this.itemService.getCharacterById(1);

    this.timmy =
    this.itemService.getCharacterById(2);

    this.larry =
    this.itemService.getCharacterById(3);

    this.caveIndex = 0;
    this.caveToDisplay =
    this.itemService.getCaveById(this.caveIndex);

    //IMPORTANT - in order to display as a raw object, .subscribe() must be called separately
    //from the object to display. async unwraps the firebase object ONLY.
    this.caveObservable =
    this.itemService.getCaveById(this.caveIndex).subscribe(dataLastEmittedFromObserver=>{
      this.caveObservable = dataLastEmittedFromObserver;
      console.log(this.caveObservable);
    });

  }

  selectCharacter(value){
    if(value==="dave"){
      this.characterToDisplay = this.dave;
      this.characterIndex = 0;
    } else if(value==="gram"){
      this.characterToDisplay = this.gram;
      this.characterIndex = 1;
    } else if(value === "timmy"){
      this.characterToDisplay = this.timmy;
      this.characterIndex = 2;
    }else if(value === "larry"){
      this.characterToDisplay = this.larry;
      this.characterIndex = 3;
    }
    this.itemService.getCharacterById(this.characterIndex).subscribe(dataLastEmittedFromObserver=>{
      this.characterObservable = dataLastEmittedFromObserver;
    });
    console.log(this.characterObservable);
    this.health = parseInt(this.characterObservable.health);
    this.strength = parseInt(this.characterObservable.strength);
    this.armor = parseInt(this.characterObservable.armor);
  }

  chooseLeft(){
    this.caveIndex = this.caveObservable.left;
    this.caveToDisplay = this.itemService.getCaveById(this.caveIndex);

    this.itemService.getCaveById(this.caveIndex).subscribe(dataLastEmittedFromObserver=>{
      this.caveObservable = dataLastEmittedFromObserver;
    });
    console.log(this.caveObservable);
    this.searchShow = true;
    this.addShow = false;
    this.itemShow = false;
    this.showLeftRight = false;
  }

  chooseRight(){
    this.caveIndex = this.caveObservable.right;
    this.caveToDisplay = this.itemService.getCaveById(this.caveIndex);

    this.itemService.getCaveById(this.caveIndex).subscribe(dataLastEmittedFromObserver=>{
      this.caveObservable = dataLastEmittedFromObserver;
    });
    console.log(this.caveObservable);
    this.searchShow = true;
    this.addShow = false;
    this.itemShow = false;
    this.showLeftRight = false;
  }

  findItem(){
    let item1 = this.caveObservable.items[0];
    let item2 = this.caveObservable.items[1];
    let rand = Math.floor((Math.random() * 4) + 1);
    let chosenItem;
    let itemType;
    if(rand === 1){
      this.itemToDisplay = this.itemService.getItemById(item1);
      chosenItem = item1;
    }else{
      this.itemToDisplay = this.itemService.getItemById(item2);
      chosenItem = item2;
    }

    this.itemService.getItemById(chosenItem).subscribe(dataLastEmittedFromObserver=>{
      this.itemObservable = new Item(dataLastEmittedFromObserver.img,dataLastEmittedFromObserver.name,   dataLastEmittedFromObserver.type,dataLastEmittedFromObserver.modifier,dataLastEmittedFromObserver.clue);
      console.log(this.itemObservable);
    });
    this.itemShow = true;
    this.searchShow = false;
    this.addShow = true;
  }

  applyItem(){
    if(this.itemObservable.type === "weapon"){
      this.strength += parseInt(this.itemObservable.modifier);
    }else if(this.itemObservable.type === "food"){
      this.health += parseInt(this.itemObservable.modifier);
    }else if(this.itemObservable.type === "armor"){
      this.armor += parseInt(this.itemObservable.modifier);
    }
    this.addShow = false;
    this.itemShow = false;
    if(this.itemObservable.modifier != 0){
      this.inventory.push(this.itemObservable);
    }

  }

  findMonster(){

    this.monsterIndex = this.caveObservable.creature;
    this.monsterToDisplay = this.itemService.getMonsterById(this.monsterIndex);

    this.itemService.getMonsterById(this.monsterIndex).subscribe(dataLastEmittedFromObserver=>{
      this.monsterObservable = new Monster(dataLastEmittedFromObserver.img,dataLastEmittedFromObserver.name,   dataLastEmittedFromObserver.story,dataLastEmittedFromObserver.health,dataLastEmittedFromObserver.strength,dataLastEmittedFromObserver.armor);
    });
    this.showLeftRight = false;
    this.walkShow = true;
  }

  walkThrough(){
    if(this.monsterObservable.health === "0"){
      this.walkShow = false;
      this.showLeftRight = true;
    }else{
      this.monShow = true;
      this.battleShow = true;
      this.walkShow = false;
    }
  }

  battleMonster(){
    console.log(this.monsterObservable);
    this.monHealth = parseInt(this.monsterObservable.health);
    this.monStrength = parseInt(this.monsterObservable.strength);
    this.monArmor = parseInt(this.monsterObservable.armor);
    this.attackShow = true;
    this.battleShow = false;
  }

  attack(){
    let attackNumber = Math.floor(this.monHealth/this.strength);
    if(this.armor > 0){
      this.armor -= (attackNumber * Math.floor(this.monStrength/2));
      this.monHealth -= (attackNumber * this.strength);
      if(this.armor < 0){
        this.health += this.armor;
        this.armor = 0;
      }
    }
    if(this.monHealth > 0 && this.armor <= 0){
      this.health -= (attackNumber * this.monStrength);
      this.monHealth -= (attackNumber * this.strength);
    }
    if(this.health <= 0){
      this.death = true;
    }
    this.showLeftRight = true;
    this.attackShow = false;
    this.monShow = false;
  }
}
