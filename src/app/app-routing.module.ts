import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './features/components/home/home.component';
import { RegisterComponent } from './features/components/register/register.component';
import { LoginComponent } from './features/components/login/login.component';
import { BlogComponent } from './features/components/blog/blog.component';
import { ArtistListComponent } from './features/components/artist-list/artist-list.component';
import { CaricatureGalleryComponent } from './features/components/caricature-gallery/caricature-gallery.component';
import { CaricatureGalleryDetailsComponent } from './features/components/caricature-gallery-details/caricature-gallery-details.component';
import { ArtistDetailsComponent } from './features/components/artist-details/artist-details.component';
import { AuthorListComponent } from './features/components/author-list/author-list.component';
import { AuthorDetailsComponent } from './features/components/author-details/author-details.component';
import { CharacterComponent } from './features/components/character/character.component';
import { ContactUsComponent } from './shared/components/contact-us/contact-us.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'artists', component: ArtistListComponent },
  { path: 'artist-details/:id', component: ArtistDetailsComponent },
  { path: 'authors', component: AuthorListComponent },
  { path: 'characters', component: CharacterComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { path: 'author-details/:id', component: AuthorDetailsComponent },
  { path: 'caricature-gallery', component: CaricatureGalleryComponent },
  {
    path: 'caricature-gallery-details/:id',
    component: CaricatureGalleryDetailsComponent,
  },
  {
    path: 'artist/:id',
    component: ArtistDetailsComponent
  },
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
