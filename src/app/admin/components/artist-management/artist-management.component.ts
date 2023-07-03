import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Artist } from 'src/app/features/Interfaces/artists';
import { ArtistService } from '../services/artist.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-artist-management',
  templateUrl: './artist-management.component.html',
  styleUrls: ['./artist-management.component.css']
})
export class ArtistManagementComponent implements OnInit {
  artists: Artist[] = [];
  displayEditModal: boolean = false;
  displaySuccessModal: boolean = false;

  displayAddArtistModal: boolean = false;

  editedArtist: Artist = {
    _id: '',
    name: '',
    image: '',
    birthDate: new Date(),
    bio: '',
    favourite: false
  };

  newArtist: Artist = {
    _id: '',
    name: '',
    image: '',
    birthDate: new Date(),
    bio: '',
    favourite: false
  };

  constructor(private artistService: ArtistService) {}

  ngOnInit(): void {
    this.loadArtists();
  }

  onImageSelected(event: any) {
    if (event.target.files && event.target.files.length) {
      const file = event.target.files[0];
      // Perform any necessary processing with the selected image file
      // For example, you can use FileReader to read the file and update the editedArtist's image property
      const reader = new FileReader();
      reader.onload = () => {
        const imageDataUrl = reader.result as string;
        this.editedArtist.image = imageDataUrl;
        this.newArtist.image = imageDataUrl; // Update newArtist's image property
      };
      reader.readAsDataURL(file);
    }
  }

  loadArtists(): void {
    this.artistService.getArtists().subscribe(
      (artists: Artist[]) => {
        this.artists = artists;
      },
      (error: HttpErrorResponse) => {
        console.log(error);
      }
    );
  }

  startEditing(artist: Artist): void {
    this.editedArtist = { ...artist };
    this.displayEditModal = true;
  }

  cancelEditing(): void {
    this.editedArtist = {
      _id: '',
      name: '',
      image: '',
      birthDate: new Date(),
      bio: '',
      favourite: false
    };
    this.displayEditModal= false;

  }

  saveArtistChanges(): void {
    this.editedArtist.favourite = this.editedArtist.favourite || false;
  
    console.log(this.editedArtist);
  
    if (this.editedArtist._id) {
      this.artistService.updateArtist(this.editedArtist._id, this.editedArtist).subscribe(
        (response: Artist) => {
          console.log(response);
          this.loadArtists();
        },
        (error: HttpErrorResponse) => {
          console.log(error);
        }
      );
    }
  
    this.closeEditModal();
  }
  

  deleteArtist(artistId: string): void {
    this.artistService.deleteArtist(artistId).subscribe(
      () => {
        console.log(`Artist with ID ${artistId} deleted.`);
        this.loadArtists();
      },
      (error: HttpErrorResponse) => {
        console.log(error);
      }
    );
  }

  addArtist(addArtistForm: NgForm): void {
    console.log('Add button clicked');
  
    if (addArtistForm.valid) {
      const favouriteValue = addArtistForm.value.favourite;

    // Assign the retrieved value to the newArtist object
    this.newArtist.favourite = favouriteValue;

      const formData = new FormData();
      formData.append('name', this.newArtist.name);
      formData.append('birthDate', this.newArtist.birthDate.toString());
      formData.append('bio', this.newArtist.bio);
      formData.append('image', this.newArtist.image);
      formData.append('favourite', this.newArtist.favourite.toString()); // Convert to string before appending

      this.artistService.createArtist(formData).subscribe(
        (response: Artist) => {
          console.log(response);
          this.newArtist = {
            _id: '',
            name: '',
            image: '',
            birthDate: new Date(),
            bio: '',
            favourite: false
          };
          this.loadArtists();
          this.displaySuccessModal = true;
          this.displayAddArtistModal = false;
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

  openAddArtistModal() {
    this.displayAddArtistModal = true;
  }

  closeAddArtistModal() {
    this.displayAddArtistModal = false;
  }
}
