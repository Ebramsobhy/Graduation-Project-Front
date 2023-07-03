import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent {
  artistsCount: number = 0;
  authorsCount: number = 0;
  usersCount: number = 0;
  charactersCount: number = 0;
  caricaturesCount: number = 0;

  // Add your logic here to fetch the actual counts from your backend or any other source

  // Example method to simulate fetching data
  fetchData() {
    // Simulating fetching data from an API or any other source
    setTimeout(() => {
      // Assigning dummy values for demonstration
      this.artistsCount = 10;
      this.authorsCount = 5;
      this.usersCount = 100;
      this.charactersCount = 50;
      this.caricaturesCount = 20;
    }, 2000);
  }

  // Call this method when the component initializes or when you want to refresh the data
  ngOnInit() {
    this.fetchData();
  }
}
