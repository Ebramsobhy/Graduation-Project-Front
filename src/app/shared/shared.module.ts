import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { AppRoutingModule } from '../app-routing.module';
import { FormsModule } from '@angular/forms';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ChatbotComponent } from './components/chatbot/chatbot.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    ContactUsComponent,
    NotFoundComponent,
    ChatbotComponent,
    
  ],
  imports: [CommonModule,AppRoutingModule,FormsModule ],
  exports: [HeaderComponent, FooterComponent,ContactUsComponent,
    NotFoundComponent,ChatbotComponent],
})
export class SharedModule {}
