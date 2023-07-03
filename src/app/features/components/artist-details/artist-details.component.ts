import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Artist } from '../../Interfaces/artists'; 
import { ArtistListService } from '../../Services/artist-list/artist-list.service'; 

@Component({
  selector: 'app-artist-details',
  templateUrl: './artist-details.component.html',
  styleUrls: ['./artist-details.component.css']
})
export class ArtistDetailsComponent implements OnInit {
  artist!: Artist;

  constructor(
    private route: ActivatedRoute,
    private artistListService: ArtistListService
  ) { }

  ngOnInit() {
    this.getArtistDetails();
    console.log(this.artist);
    
  }

  getArtistDetails() {
    const artistId = this.route.snapshot.params['id'];
    this.artistListService.getArtistById(artistId).subscribe(
      (artist: Artist) => {
        this.artist = artist;
      },
      (error: any) => {
        console.error('Failed to fetch artist details:', error);
      }
    );
  }

  
}
