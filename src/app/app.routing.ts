import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { AppComponent } from './app.component';
import { CaveComponent } from './cave/cave.component';
import { CharacterComponent } from './character/character.component';
import { ItemComponent } from './item/item.component';

const appRoutes: Routes = [
  {
    path: 'admin',
    component: AdminComponent
  },
  {
    path: 'cave',
    component: CaveComponent
  },
  {
    path: 'character',
    component: CharacterComponent
  },
  {
    path: 'item',
    component: ItemComponent
  }
 ];

 export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
