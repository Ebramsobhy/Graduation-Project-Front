import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArtistDetailsComponent } from './components/artist-details/artist-details.component';
import { ArtistListComponent } from './components/artist-list/artist-list.component';
import { BlogComponent } from './components/blog/blog.component';
import { CaricatureGalleryComponent } from './components/caricature-gallery/caricature-gallery.component';
import { CaricatureGalleryDetailsComponent } from './components/caricature-gallery-details/caricature-gallery-details.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';
import { AuthorListComponent } from './components/author-list/author-list.component';
import { AuthorDetailsComponent } from './components/author-details/author-details.component';
import { CharacterComponent } from './components/character/character.component';

@NgModule({
  declarations: [
    ArtistDetailsComponent,
    ArtistListComponent,
    BlogComponent,
    CaricatureGalleryComponent,
    CaricatureGalleryDetailsComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    CharacterComponent,
    AuthorListComponent,
    AuthorDetailsComponent,
  ],
  imports: [CommonModule, ReactiveFormsModule, FormsModule, AppRoutingModule,],
  exports: [
    AuthorDetailsComponent,
    AuthorListComponent,
    ArtistDetailsComponent,
    ArtistListComponent,
    BlogComponent,
    CaricatureGalleryComponent,
    CaricatureGalleryDetailsComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
  ],
})
export class FeaturesModule {

}
