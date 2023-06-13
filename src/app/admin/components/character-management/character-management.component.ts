import { Component, OnInit } from '@angular/core';
// import { CharacterService } from '../services/character.service';
// import { Charactert } from './../models/Character.model';

@Component({
  selector: 'app-character-management',
  templateUrl: './character-management.component.html',
  styleUrls: ['./character-management.component.css'],
})
export class CharacterManagementComponent implements OnInit {
  // characters: Charactert[] = [];

  constructor() {}
  // constructor(private characterService: CharacterService) {}

  ngOnInit(): void {
    // this.getCharacters();
  }

  // getCharacters(): void {
  //   this.characterService
  //     .getCharacters()
  //     .subscribe((characters) => (this.characters = characters));
  // }

  // deleteCharacter(character: any): void {
  //   this.characterService
  //     .deleteCharacter(character)
  //     .subscribe(
  //       () => (this.characters = this.characters.filter((c) => c !== character))
  //     );
  // }
}
