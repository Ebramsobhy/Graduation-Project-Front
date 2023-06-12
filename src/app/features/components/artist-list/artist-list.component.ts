import { Component, OnInit } from '@angular/core';
import { Artist } from 'src/app/features/Interfaces/artists'; 
import { ArtistListService } from '../../Services/artist-list/artist-list.service';
@Component({
  selector: 'app-artist-list',
  templateUrl: './artist-list.component.html',
  styleUrls: ['./artist-list.component.css']
})
export class ArtistListComponent implements OnInit{
  artists: Artist[] = [];

  constructor(private artistListService: ArtistListService) { }

  ngOnInit(): void {
    this.getArtists();
  }

  getArtists(): void {
    this.artistListService.getArtists()
      .subscribe(artists => this.artists = artists);
  }

  
}
