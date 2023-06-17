import { Component, OnInit } from '@angular/core';
import { AuthorListService } from 'src/app/features/Services/author-list/author-list.service';
import { Author } from 'src/app/features/Interfaces/author';

@Component({
  selector: 'app-author-management',
  templateUrl: './author-management.component.html',
  styleUrls: ['./author-management.component.css']
})
export class AuthorManagementComponent implements OnInit {

  authers:Author[]=[];
  constructor (private _AuthorListService:AuthorListService){}

ngOnInit(): void {
    this.GetAuthers();
}
  GetAuthers()
  {
    this._AuthorListService.getAuthors()
      .subscribe(authers => this.authers = authers);
  }
}
