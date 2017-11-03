import { Injectable } from '@angular/core';
import { Item } from './item.model';
import { Character } from './character.model';
import { Cave } from './cave.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class ItemService {
  items: FirebaseListObservable<any[]>;
  characters: FirebaseListObservable<any[]>;
  caves: FirebaseListObservable<any[]>;
  constructor(private database: AngularFireDatabase) {
    this.items = database.list('items');
    this.characters = database.list('characters');
    this.caves = database.list('caves');
  }

  getItems() {
    return this.items;
  }

  getCharacters() {
    return this.characters;
  }

  getCaves() {
    return this.caves;
  }

  getItemById(itemId: number) {
    return this.database.object('items/'+ itemId);
  }

  getCharacterById(characterId: number) {
    return this.database.object('characters/'+ characterId);
  }

  getCaveById(caveId: number) {
    return this.database.object('caves/'+ caveId);
  }
}
