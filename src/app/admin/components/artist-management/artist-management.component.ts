import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Artist } from 'src/app/features/Interfaces/artists';
import { ArtistService } from '../services/artist.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-artist-management',
  templateUrl: './artist-management.component.html',
  styleUrls: ['./artist-management.component.css']
})
export class ArtistManagementComponent implements OnInit {
  artists: Artist[] = [];
  newArtist: Artist = {
    _id: '',
    name: '',
    image: '',
    birthDate: new Date(),
    bio: '',
    favourite: false
  };
  isAddingArtist = false;

  constructor(private router: Router, private artistService: ArtistService) { }

  ngOnInit(): void {
    this.getArtists();
  }

  getArtists(): void {
    this.artistService.getArtists().subscribe(
      (artists: Artist[]) => {
        this.artists = artists;
      },
      (error: any) => {
        console.error('Failed to retrieve artists:', error);
      }
    );
  }

  saveArtist(artist: Artist): void {
    if (artist._id) {
      this.artistService.updateArtist(artist._id, artist).subscribe(
        (updatedArtist: Artist) => {
          console.log('Artist updated:', updatedArtist);
          this.getArtists(); // Refresh the artist list after update
          this.resetNewArtist();
        },
        (error: any) => {
          console.error('Failed to update artist:', error);
        }
      );
    } else {
      this.artistService.createArtist(artist).subscribe(
        (createdArtist: Artist) => {
          console.log('Artist created:', createdArtist);
          this.getArtists(); // Refresh the artist list after create
          this.resetNewArtist();
        },
        (error: any) => {
          console.error('Failed to create artist:', error);
        }
      );
    }
  }

  deleteArtist(artist: Artist): void {
    this.artistService.deleteArtist(artist._id).subscribe(
      () => {
        console.log('Artist deleted:', artist);
        // Remove the deleted artist from the local array
        this.artists = this.artists.filter(a => a._id !== artist._id);
        // Optionally, you can display a success message or perform any other action after deleting the artist
      },
      (error: HttpErrorResponse) => {
        console.error('Failed to delete artist:', error);
        if (error.status === 404) {
          console.error('Artist not found.');
          // Optionally, you can display an error message or perform any other action if the artist is not found
        } else {
          console.error('An unexpected error occurred.');
          // Optionally, you can display a generic error message or perform any other action for other error cases
        }
      }
    );
  }
  
  

  editArtist(artist: Artist): void {
    this.newArtist = { ...artist }; // Assign the selected artist to the newArtist for editing
    this.isAddingArtist = true; // Show the add artist modal
  }

  resetNewArtist(): void {
    this.newArtist = {
      _id: '',
      name: '',
      image: '',
      birthDate: new Date(),
      bio: '',
      favourite: false
    };
    this.isAddingArtist = false; // Hide the add artist modal
  }
}
