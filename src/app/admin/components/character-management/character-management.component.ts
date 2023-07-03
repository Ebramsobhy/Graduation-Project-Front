import { Author } from 'src/app/features/Interfaces/author';
import { Component, OnInit } from '@angular/core';
import { Character } from 'src/app/features/Interfaces/character';
import { CharacterService } from '../services/character.service';
import { Artist } from 'src/app/features/Interfaces/artists';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-character-management',
  templateUrl: './character-management.component.html',
  styleUrls: ['./character-management.component.css'],
})
export class CharacterManagementComponent implements OnInit {
  characters: Character[] = [];
  displayEditModal: boolean = false;
  displaySuccessModal: boolean = false;
  displayAddCharacterModal: boolean = false;

  authors!: Author[];
  artists!: Artist[];

  editedCharacter: Character = {
    _id: '',
    name: '',
    image: '',
    author: {} as Author,
    artist: {} as Artist,
  };

  newCharacter: Character = {
    _id: '',
    name: '',
    image: '',
    author: {} as Author,
    artist: {} as Artist,
  };


  constructor(private characterService: CharacterService,private http: HttpClient) {}
  
  ngOnInit(): void {
    this.loadCharacters();
    this.fetchAuthors();
    this.fetchArtists();
  }

  fetchAuthors() {
    this.http.get<any>('http://localhost:5000/authors').subscribe(
      (response) => {
        this.authors = response; // Assign the retrieved data to the authors array
      },
      (error) => {
        console.log('Error fetching authors:', error);
      }
    );
  }

  fetchArtists() {
    this.http.get<any>('http://localhost:5000/artists').subscribe(
      (response) => {
        this.artists = response; // Assign the retrieved data to the artists array
      },
      (error) => {
        console.log('Error fetching artists:', error);
      }
    );
  }




  onImageSelected(event: any) {
    if (event.target.files && event.target.files.length) {
      const file = event.target.files[0];
      // Perform any necessary processing with the selected image file
      // For example, you can use FileReader to read the file and update the editedCharacter's image property
      const reader = new FileReader();
      reader.onload = () => {
        const imageDataUrl = reader.result as string;
        this.editedCharacter.image = imageDataUrl;
        this.newCharacter.image = imageDataUrl; // Update newCharacter's image property
      };
      reader.readAsDataURL(file);
    }
  }

  loadCharacters(): void {
    this.characterService.getCharacters().subscribe(
      (Characters: Character[]) => {
        this.characters = Characters;
      },
      (error: HttpErrorResponse) => {
        console.log(error);
      }
    );
  }

  startEditing(Character: Character): void {
    this.editedCharacter = { ...Character };
    this.displayEditModal = true;
  }

  cancelEditing(): void {
    this.editedCharacter = {
      _id: '',
      name: '',
      image: '',
      author: {} as Author,
      artist: {} as Artist,
    };
    this.displayEditModal = false;
  }

  saveCharacterChanges(): void {
  
    console.log(this.editedCharacter);
  
    if (this.editedCharacter._id) {
      this.characterService.updateCharacter(this.editedCharacter._id, this.editedCharacter).subscribe(
        (response: Character) => {
          console.log(response);
          this.loadCharacters();
        },
        (error: HttpErrorResponse) => {
          console.log(error);
        }
      );
    }
  
    this.closeEditModal();
  }


  deleteCharacter(CharacterId: string): void {
    this.characterService.deleteCharacter(CharacterId).subscribe(
      () => {
        console.log(`Character with ID ${CharacterId} deleted.`);
        this.loadCharacters();
      },
      (error: HttpErrorResponse) => {
        console.log(error);
      }
    );
  }


  
  
  addCharacter(addCharacterForm: NgForm): void {
    console.log('Add button clicked');
  
    if (addCharacterForm.valid) {
      const formData = new FormData();
      formData.append('name', this.newCharacter.name);
      formData.append('image', this.newCharacter.image);
  
      Object.entries(this.newCharacter.author).forEach(([key, value]) => {
        formData.append(`author.${key}`, value);
      });
  
      Object.entries(this.newCharacter.artist).forEach(([key, value]) => {
        formData.append(`artist.${key}`, value);
      });
  
      this.characterService.createCharacter(formData).subscribe(
        (response: Character) => {
          console.log(response);
          this.newCharacter = {
            _id: '',
            name: '',
            image: '',
            author: {} as Author,
            artist: {} as Artist,
          };
          this.loadCharacters();
          this.displaySuccessModal = true;
          this.displayAddCharacterModal = false;
        },
        (error: HttpErrorResponse) => {
          console.log(error);
        }
      );
    }
  }
  
  
  

 
 
  
  closeSuccessModal() {
    this.displaySuccessModal = false;
  }

  closeEditModal() {
    this.displayEditModal = false;
    this.cancelEditing();
  }

  openAddCharacterModal() {
    this.displayAddCharacterModal = true;
  }

  closeAddCharacterModal() {
    this.displayAddCharacterModal = false;
  }
}
