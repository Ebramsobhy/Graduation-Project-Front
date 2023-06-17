import { Contact } from './../../../features/Interfaces/contact';
import { Component } from '@angular/core';
import { ContactUsService } from 'src/app/features/Services/contact-us/contact-us.service';
@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent {
  
  contact: any = {
    name: '',
    email: '',
    message: ''
  };

  constructor(private contactUsService: ContactUsService) {}

  sendMessage(): void {
    this.contactUsService.sendMessage(this.contact).subscribe({
      next:() => {
      // Handle success, such as showing a success message or navigating to another page
      console.log('Message sent successfully');
    }, 
    error: (error)=> {
      // Handle error, such as displaying an error message
      console.error('Failed to send message:', error);
    }});
  }
}
