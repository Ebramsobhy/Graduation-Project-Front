import { AuthorListService } from './../../Services/author-list/author-list.service';
import { Component } from '@angular/core';
import { Author } from 'src/app/features/Interfaces/author';


@Component({
  selector: 'app-author-list',
  templateUrl: './author-list.component.html',
  styleUrls: ['./author-list.component.css']
})
export class AuthorListComponent {
  authors: Author[] = [];

  constructor(private authorListService: AuthorListService) { }

  ngOnInit(): void {
    this.getArtists();
  }

  getArtists(): void {
    this.authorListService.getAuthors()
      .subscribe(authors => this.authors = authors);
  }


  toggleFavorite(author: Author): void {
    author.favourite = !author.favourite;
  }
}
