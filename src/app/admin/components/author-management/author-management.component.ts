import { Component, OnInit } from '@angular/core';
import { Author } from 'src/app/features/Interfaces/author';
import { AuthorService } from '../services/author/author.service';
import { HttpErrorResponse } from '@angular/common/http';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-author-management',
  templateUrl: './author-management.component.html',
  styleUrls: ['./author-management.component.css']
})
export class AuthorManagementComponent implements OnInit {
  Authors: Author[] = [];
  displayEditModal: boolean = false;
  displaySuccessModal: boolean = false;
  displayAddAuthorModal: boolean = false;

  editedAuthor: Author = {
    _id: '',
    name: '',
    image: '',
    birthDate: new Date(),
    bio: '',
    favourite: false
  };

  newAuthor: Author = {
    _id: '',
    name: '',
    image: '',
    birthDate: new Date(),
    bio: '',
    favourite: false
  };

  constructor(private AuthorService: AuthorService) {}

  ngOnInit(): void {
    this.loadAuthors();
  }

  onImageSelected(event: any) {
    if (event.target.files && event.target.files.length) {
      const file = event.target.files[0];
      // Perform any necessary processing with the selected image file
      // For example, you can use FileReader to read the file and update the editedAuthor's image property
      const reader = new FileReader();
      reader.onload = () => {
        const imageDataUrl = reader.result as string;
        this.editedAuthor.image = imageDataUrl;
        this.newAuthor.image = imageDataUrl; // Update newAuthor's image property
      };
      reader.readAsDataURL(file);
    }
  }

  loadAuthors(): void {
    this.AuthorService.getAuthors().subscribe(
      (Authors: Author[]) => {
        this.Authors = Authors;
      },
      (error: HttpErrorResponse) => {
        console.log(error);
      }
    );
  }

  startEditing(Author: Author): void {
    this.editedAuthor = { ...Author };
    this.displayEditModal = true;
  }

  cancelEditing(): void {
    this.editedAuthor = {
      _id: '',
      name: '',
      image: '',
      birthDate: new Date(),
      bio: '',
      favourite: false
    };
    this.displayEditModal= false;

  }

  saveAuthorChanges(): void {
    this.editedAuthor.favourite = this.editedAuthor.favourite || false;
  
    console.log(this.editedAuthor);
  
    if (this.editedAuthor._id) {
      this.AuthorService.updateAuthor(this.editedAuthor._id, this.editedAuthor).subscribe(
        (response: Author) => {
          console.log(response);
          this.loadAuthors();
        },
        (error: HttpErrorResponse) => {
          console.log(error);
        }
      );
    }
  
    this.closeEditModal();
  }
  

  deleteAuthor(AuthorId: string): void {
    this.AuthorService.deleteAuthor(AuthorId).subscribe(
      () => {
        console.log(`Author with ID ${AuthorId} deleted.`);
        this.loadAuthors();
      },
      (error: HttpErrorResponse) => {
        console.log(error);
      }
    );
  }


  addAuthor(addArtistForm: NgForm): void {
    console.log('Add button clicked');
  
    if (addArtistForm.valid) {
      const favouriteValue = addArtistForm.value.favourite;

    // Assign the retrieved value to the newAuthor object
    this.newAuthor.favourite = favouriteValue;

      const formData = new FormData();
      formData.append('name', this.newAuthor.name);
      formData.append('birthDate', this.newAuthor.birthDate.toString());
      formData.append('bio', this.newAuthor.bio);
      formData.append('image', this.newAuthor.image);
      formData.append('favourite', this.newAuthor.favourite.toString()); // Convert to string before appending

      this.AuthorService.createAuthor(formData).subscribe(
        (response: Author) => {
          console.log(response);
          this.newAuthor = {
            _id: '',
            name: '',
            image: '',
            birthDate: new Date(),
            bio: '',
            favourite: false
          };
          this.loadAuthors();
          this.displaySuccessModal = true;
          this.displayAddAuthorModal = false;
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

  openAddAuthorModal() {
    this.displayAddAuthorModal = true;
  }

  closeAddAuthorModal() {
    this.displayAddAuthorModal = false;
  }
}
