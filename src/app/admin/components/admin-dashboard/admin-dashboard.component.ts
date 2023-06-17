import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
  
  ngOnInit(): void {
    const sidebarToggleTop = document.getElementById('sidebarToggleTop');

    if (sidebarToggleTop) {
      sidebarToggleTop.addEventListener('click', () => {
        const body = document.querySelector('body');
        if (body) {
          body.classList.toggle('sidebar-toggled');
        }
        const sidebar = document.querySelector('.sidebar');
        if (sidebar) {
          sidebar.classList.toggle('toggled');
        }
      });
    }
  }
}
