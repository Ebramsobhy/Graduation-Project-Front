import { Component, Renderer2, ElementRef } from '@angular/core';
import { ResponseService } from '../../../response.service';

@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.css']
})
export class ChatbotComponent {
  isChatOpen = false;
  userInputText = '';

  private isFirstChatOpen = true;

  constructor(
    private renderer: Renderer2,
    private elementRef: ElementRef,
    private responseService: ResponseService
  ) {}

  toggleChat(): void {
    this.isChatOpen = !this.isChatOpen;

    if (this.isChatOpen && this.isFirstChatOpen) {
      this.firstBotMessage();
      this.isFirstChatOpen = false;
    }
  }

  firstBotMessage(): void {
    const firstMessage = 'اهلاً بك كيف يمكننى مساعدتك';
    const botText = this.createBotMessage(firstMessage);
    this.appendMessageToChat(botText);
  }

  getHardResponse(userText: string): void {
    const botResponse = this.responseService.getBotResponse(userText);
    const botText = this.createBotMessage(botResponse);
    this.appendMessageToChat(botText);

    this.scrollToBottom();
  }

  getResponse(): void {
    let userText = this.userInputText.trim();

    const userTextElement = this.createUserMessage(userText);
    this.appendMessageToChat(userTextElement);

    this.userInputText = '';

    this.scrollToBottom();

    setTimeout(() => {
      this.getHardResponse(userText);
    }, 1000);
  }

  handleKeyPress(event: KeyboardEvent): void {
    if (event.key === 'Enter') {
      const userText = this.userInputText.trim();
      if (userText !== '') {
        this.getResponse();
      }
    }
  }
   
  buttonSendText(sampleText: string): void {
    const sampleTextElement = this.createUserMessage(sampleText);
    this.appendMessageToChat(sampleTextElement);

    this.userInputText = '';

    this.scrollToBottom();
  }

  createUserMessage(text: string): HTMLElement {
    const messageSpan = this.renderer.createElement('span');
    messageSpan.innerHTML = text;

    const messageContainer = this.renderer.createElement('div');
    this.renderer.addClass(messageContainer, 'userText');
    this.renderer.appendChild(messageContainer, messageSpan);

    return messageContainer;
  }

  createBotMessage(text: string): HTMLElement {
    const messageSpan = this.renderer.createElement('span');
    messageSpan.innerHTML = text;

    const messageContainer = this.renderer.createElement('div');
    this.renderer.addClass(messageContainer, 'botText');
    this.renderer.appendChild(messageContainer, messageSpan);

    return messageContainer;
  }

  appendMessageToChat(message: HTMLElement): void {
    const chatbox = this.elementRef.nativeElement.querySelector('#chatbox');
    if (chatbox) {
      this.renderer.appendChild(chatbox, message);
    }
  }

  scrollToBottom(): void {
    const chatBarBottom = this.elementRef.nativeElement.querySelector('#chat-bar-bottom');
    if (chatBarBottom) {
      chatBarBottom.scrollIntoView({ behavior: 'smooth', block: 'end' });
    }
  }
}

