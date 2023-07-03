import { NgModule } from '@angular/core';
import { CommonModule, formatDate } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { UserManagementComponent } from './components/user-management/user-management.component';
import { ArtistManagementComponent } from './components/artist-management/artist-management.component';
import { AuthorManagementComponent } from './components/author-management/author-management.component';
import { CharacterManagementComponent } from './components/character-management/character-management.component';
import { CaricatureManagementComponent } from './components/caricature-management/caricature-management.component';
import { CommentManagementComponent } from './components/comment-management/comment-management.component';
import { AdminHomeComponent } from './components/admin-home/admin-home.component';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AdminDashboardComponent,
    UserManagementComponent,
    ArtistManagementComponent,
    AuthorManagementComponent,
    CharacterManagementComponent,
    CommentManagementComponent,
    AdminHomeComponent,
    CaricatureManagementComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    AdminRoutingModule,
    FormsModule,
    ToastrModule.forRoot(),
  ],
  exports: [
    AdminDashboardComponent,
    UserManagementComponent,
    ArtistManagementComponent,
    AuthorManagementComponent,
    CharacterManagementComponent,
    CommentManagementComponent,
  ],
  bootstrap: [AdminDashboardComponent],
})
export class AdminModule {}
