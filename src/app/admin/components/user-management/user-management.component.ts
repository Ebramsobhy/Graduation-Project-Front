import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user/user.service';
import { User } from 'src/app/features/Interfaces/user';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.css']
})
export class UserManagementComponent implements OnInit {
  users: User[] = [];
  editedUser: User | undefined;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(): void {
    this.userService.getAllUsers().subscribe(
      (users: User[]) => {
        this.users = users;
      },
      (error: any) => {
        console.log(error);
      }
    );
  }

  startEditing(user: User): void {
    this.editedUser = { ...user }; // Create a copy of the user to avoid modifying the original
  }

  cancelEditing(): void {
    this.editedUser = undefined;
  }

  saveUserChanges(): void {
    if (this.editedUser) {
      this.userService.updateUser(this.editedUser).subscribe(
        (response: any) => {
          console.log(response);
          this.editedUser = undefined;
          this.loadUsers();
        },
        (error: any) => {
          console.log(error);
        }
      );
    }
  }

  deleteUser(user: User): void {
    this.userService.deleteUser(user._id).subscribe(
      (response: any) => {
        console.log(response);
        this.loadUsers();
      },
      (error: any) => {
        console.log(error);
      }
    );
  }
}
