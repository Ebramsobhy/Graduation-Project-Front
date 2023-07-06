import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Character } from '../../Interfaces/character';
import { CharacterService } from '../../Services/character/character.service';

@Component({
  selector: 'app-character-details',
  templateUrl: './character-details.component.html',
  styleUrls: ['./character-details.component.css']
})
export class CharacterDetailsComponent implements OnInit {
  character!: Character;

  constructor(
    private route: ActivatedRoute,
    private characterService: CharacterService
  ) { }

  ngOnInit() {
    this.getCharacterDetails();
  }

  getCharacterDetails() {
    const characterId = this.route.snapshot.params['id'];
    this.characterService.getCharacter(characterId).subscribe(
      (character: Character) => {
        this.character = character;
      },
      (error: any) => {
        console.error('Failed to fetch character details:', error);
      }
    );
  }
}
