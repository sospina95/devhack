import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CharactersComponent } from './characters/characters.component'
import { DetailCharactersComponent } from './characters/detailview/detail-characters.component';
import { MaterialModule } from "./../material.module";
const routes: Routes = [
  { path: '', component: CharactersComponent },
  { path: 'detail/:id', component: DetailCharactersComponent }
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes), MaterialModule],
  declarations: [CharactersComponent,DetailCharactersComponent]
})
export class PaginasModule {}

