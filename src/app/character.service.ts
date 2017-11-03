import { Injectable } from '@angular/core';
import { Character } from './character.model';
import { Item } from './item.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class CharacterService {
  characters: FirebaseListObservable<any[]>;
  items: FirebaseListObservable<any[]>;
  constructor(private database: AngularFireDatabase) {
    this.characters = database.list('characters');
    this.items = database.list('items');
  }

  getItems() {
    return this.items;
  }

  getCharacters() {
    return this.characters;
  }

  getItemById(itemId: number) {
    return this.database.object('items/'+ itemId);
  }

  getCharacterById(characterId: number) {
    return this.database.object('characters/'+ characterId);
  }
}
