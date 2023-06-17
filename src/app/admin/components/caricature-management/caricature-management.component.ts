import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { Caricature } from 'src/app/features/Interfaces/caricature';
import { CaricatureService } from '../services/caricature.service'; 

@Component({
  selector: 'app-caricature-management',
  templateUrl: './caricature-management.component.html',
  styleUrls: ['./caricature-management.component.css'],
})
export class CaricatureManagementComponent implements OnInit {
  caricatures: Caricature[] = [];
  isAddingCaricature: boolean = false;
  newCaricature: Caricature = {
    _id: '',
    image: '',
    authorName: {
      _id: '',
      name: '',
      image: '',
      birthDate: new Date,
      bio: '',
      favourite: false
    },
    artistName: {
      _id: '',
      name: '',
      image: '',
      birthDate: new Date,
      bio: '',
      favourite: false
    },
    characterName: {
      _id: '',
      name: '',
      image: '',
      author: {
        _id: '',
        name: '',
        image: '',
        birthDate: new Date,
        bio: '',
        favourite: false
      },
      artist: {
        _id: '',
        name: '',
        image: '',
        birthDate: new Date,
        bio: '',
        favourite: false
      }
    },
    description: '',
    favourite: false,
    
  };

  constructor(
    private caricatureService: CaricatureService,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.getCaricatures();
  }

  getCaricatures(): void {
    this.caricatureService.getCaricatures().subscribe(
      (caricatures: Caricature[]) => {
        this.caricatures = caricatures;
      },
      (error: any) => {
        console.log(error);
      }
    );
  }

  deleteCaricature(caricature: Caricature): void {
    const confirmation = confirm('Are you sure you want to delete this caricature?');
    if (confirmation) {
      this.caricatureService.deleteCaricature(caricature._id).subscribe(
        () => {
          this.caricatures = this.caricatures.filter(c => c._id !== caricature._id);
          this.toastr.success('Caricature deleted successfully.', 'Success');
        },
        (error: any) => {
          console.log(error);
        }
      );
    }
  }

  openAddCaricatureModal(): void {
    this.isAddingCaricature = true;
    this.newCaricature = {
      _id: '',
      image: '',
      authorName: {
        _id: '',
        name: '',
        image: '',
        birthDate: new Date,
        bio: '',
        favourite: false
      },
      artistName: {
        _id: '',
        name: '',
        image: '',
        birthDate: new Date,
        bio: '',
        favourite: false
      },
      characterName: {
        _id: '',
        name: '',
        image: '',
        author: {
          _id: '',
          name: '',
          image: '',
          birthDate: new Date,
          bio: '',
          favourite: false
        },
        artist: {
          _id: '',
          name: '',
          image: '',
          birthDate: new Date,
          bio: '',
          favourite: false
        }
      },
      description: '',
      favourite: false
    };
  }

  saveCaricature(caricature: Caricature): void {
    if (caricature._id) {
      this.caricatureService.updateCaricature(caricature, caricature._id).subscribe(
        () => {
          this.toastr.success('Caricature updated successfully.', 'Success');
        },
        (error: any) => {
          console.log(error);
        }
      );
    } else {
      this.caricatureService.addCaricature(caricature).subscribe(
        (newCaricature: Caricature) => {
          this.caricatures.push(newCaricature);
          this.toastr.success('Caricature added successfully.', 'Success');
        },
        (error: any) => {
          console.log(error);
        }
      );
    }
    this.isAddingCaricature = false;
  }
}
