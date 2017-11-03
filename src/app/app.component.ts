import { Component, OnInit } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2/database';
import { Router } from '@angular/router';
import { Cave } from './cave.model';
import { CaveService } from './cave.service';
import { Character } from './character.model';
import { CharacterService } from './character.service';
import { Item } from './item.model';
import { ItemService } from './item.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'You are wandering through a spooky forest';
  hideSelect = true;
  constructor(private router: Router) {};

  goToCave() {
    this.router.navigate(['cave']);
    this.hideSelect = false;
  };

  goToCharacter() {
    this.router.navigate(['character']);
    this.hideSelect = false;
    this.title = 'a spooky cave';
  };

  goToItem() {
    this.router.navigate(['item']);
    this.hideSelect = false;
    this.title = 'a spooky cave';
  };
}
