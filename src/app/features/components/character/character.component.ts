import { Component, OnInit } from '@angular/core';
import { Character } from '../../Interfaces/character';
import { CharacterService } from '../../Services/character/character.service'; 

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit {
  characters: Character[] = [];

  constructor(private characterService: CharacterService) { }

  ngOnInit(): void {
    this.getCharacters();
  }

  getCharacters(): void {
    this.characterService.getCharacters()
      .subscribe(characters => {
        console.log(characters);
        
        this.characters = characters
      });
  }
}
