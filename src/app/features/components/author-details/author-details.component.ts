import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Author } from '../../Interfaces/author';
import { AuthorListService } from '../../Services/author-list/author-list.service';

@Component({
  selector: 'app-author-details',
  templateUrl: './author-details.component.html',
  styleUrls: ['./author-details.component.css']
})
export class AuthorDetailsComponent implements OnInit {
  author!: Author;

  constructor(
    private route: ActivatedRoute,
    private authorListService: AuthorListService
  ) { }

  ngOnInit() {
    this.getAuthorDetails();
    console.log(this.author);
  }

  getAuthorDetails() {
    const authorId = this.route.snapshot.params['id'];
    this.authorListService.getAuthorById(authorId).subscribe(
      (author: Author) => {
        this.author = author;
      },
      (error: any) => {
        console.error('Failed to fetch author details:', error);
      }
    );
  }
}
