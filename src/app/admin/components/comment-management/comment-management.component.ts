import { Component, OnInit } from '@angular/core';
// import { CommentService } from '../services/comment.service';
// import { Comment } from '../models/comment.model';

@Component({
  selector: 'app-comment-management',
  templateUrl: './comment-management.component.html',
  styleUrls: ['./comment-management.component.css'],
})
export class CommentManagementComponent implements OnInit {
  comments: Comment[] = [];

  constructor() {}
  // constructor(private commentService: CommentService) {}

  ngOnInit(): void {
  }
  // ngOnInit(): void {
  //   this.getComments();
  // }

  // getComments(): void {
  //   this.commentService
  //     .getComments()
  //     .subscribe((comments) => (this.comments = comments));
  // }

  // deleteComment(commentId: number): void {
  //   this.commentService.deleteComment(commentId).subscribe(() => {
  //     this.comments = this.comments.filter((c) => c.id !== commentId);
  //   });
  // }
}
