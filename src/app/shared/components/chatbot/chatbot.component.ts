import { Component, Renderer2, ElementRef } from '@angular/core';
import { ResponseService } from 'src/app/features/Services/chatbot/response.service';
@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.css']
})
export class ChatbotComponent {
  isChatOpen = false;
  userInputText = '';
  currentQuestionIndex = 0;
  answers: string[] = [];

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
    const firstMessage = 'مرحباً بك كيف يمكننى مساعدتك';
    const botText = this.createBotMessage(firstMessage);
    this.appendMessageToChat(botText);
    this.displayQuestion();
  }

  displayQuestion(): void {
    let question: string | null = null;
    let options: string[] = [];
  
    switch (true) {
      case this.answers.length === 0:
        question = 'اختر الموضوع الذي تريدة';
        options = ['رسومات كاريكاتير', 'الشخصيات', 'الفنانون'];
        break;
      case this.answers.includes('رسومات كاريكاتير'):
        const userSelectedOption1 = 'رسومات كاريكاتير';
        this.appendSelectedOptionMessage(userSelectedOption1);
        break;
      case this.answers.includes('الشخصيات'):
        const userSelectedOption2 = 'الشخصيات';
        this.appendSelectedOptionMessage(userSelectedOption2);
        break;
      default:
        options = [];
        break;
    }
  
    if (question !== null) {
      const questionElement = this.createBotMessage(question);
      this.appendMessageToChat(questionElement);
    }
  
    for (let i = 0; i < options.length; i++) {
      const optionElement = this.createOptionElement(options[i]);
      this.appendMessageToChat(optionElement);
    }
  
    this.scrollToBottom();
  }
  
  appendSelectedOptionMessage(option: string): void {
    const userSelectedOptionElement = this.createUserMessage(option);
    this.appendMessageToChat(userSelectedOptionElement);
  }
   
  createOptionElement(option: string): HTMLElement {
    const optionButton = this.renderer.createElement('button');
    this.renderer.addClass(optionButton, 'option-button');
    this.renderer.setAttribute(optionButton, 'type', 'button');
    this.renderer.appendChild(optionButton, this.renderer.createText(option));
    this.renderer.listen(optionButton, 'click', () => this.handleOptionClick(option));

    const optionContainer = this.renderer.createElement('div');
    this.renderer.addClass(optionContainer, 'option-container');
    this.renderer.appendChild(optionContainer, optionButton);

    return optionContainer;
  }

  handleOptionClick(option: string): void {
    this.answers.push(option);
    this.appendMessageToChat(this.createUserMessage(option));
  
    const optionActions: Record<string, Function> = {
      'رسومات كاريكاتير': () => {
        const question = 'ما نوع الكاريكاتير الذي ترغب فيه؟';
        const options = ['ساخر', 'سياسي', 'رومانسي'];
        this.displayQuestionWithOptions(question, options);
      },
      'ساخر': () => {
        const comedyMessage = 'الكاريكاتير الساخر هو الذي يتناول المشاكل الاجتماعية التي تحدث يوميًا بشكل كوميدي';
        this.displayBotMessage(comedyMessage);
      },
      'سياسي': () => {
        const politicMessage = 'الكاريكاتير السياسي هو الذي يتناول مشاكل وقضايا البلد مثل البطالة والفساد';
        this.displayBotMessage(politicMessage);
      },
      'رومانسي': () => {
        const romanceMessage = 'الكاريكاتير الرومانسي هو الذي يتناول المشاكل التي تحدث بين الأزواج بشكل كوميدي';
        this.displayBotMessage(romanceMessage);
      },
      'الشخصيات': () => {
        const question = 'من هم الشخصيات التي ترغب فيها؟';
        const options = ['رياضيين', 'ممثلين', 'سياسيين'];
        this.displayQuestionWithOptions(question, options);
      },
      'رياضيين': () => {
        const sportsMessage = 'يوجد رسومات كاريكاتير للعديد من الرياضيين مثل محمد صلاح وكريستيانو رونالدو';
        this.displayBotMessage(sportsMessage);
      },
      'ممثلين': () => {
        const actorsMessage = 'رسومات كاريكاتير للعديد من الممثلين مثل عادل إمام';
        this.displayBotMessage(actorsMessage);
      },
      'سياسيين': () => {
        const politicalMessage = 'يوجد رسومات كاريكاتير للعديد من السياسيين مثل باراك أوباما';
        this.displayBotMessage(politicalMessage);
      },
      'الفنانون': () => {
        const question = 'من هم الفنانون التى تريد مشاهدة اعمالهم؟';
        const options = ['على المندلاوي', 'جواد حجازي', 'مصطفى حسين'];
        this.displayQuestionWithOptions(question, options);
      },
      'على المندلاوي': () => {
        const firstArtistMessage = 'سنحولك على الصفحة الخاصة بـ اعمال الفنان على المندلاوي';
        this.displayBotMessage(firstArtistMessage);
      },
      'جواد حجازي': () => {
        const secondArtistMessage = 'سنحولك على الصفحة الخاصة بـ اعمال الفنان جواد حجازي';
        this.displayBotMessage(secondArtistMessage);
      },
      'مصطفى حسين': () => {
        const thirdArtistMessage = 'سنحولك على الصفحة الخاصة بـ اعمال الفنان جواد حجازي';
        this.displayBotMessage(thirdArtistMessage);
      },
    };
  
    const optionAction = optionActions[option];
    if (optionAction) {
      optionAction();
    }
  
    this.scrollToBottom();
  }
  
  displayBotMessage(message: string): void {
    const botMessageElement = this.createBotMessage(message);
    this.appendMessageToChat(botMessageElement);
  }
  
  displayQuestionWithOptions(question: string, options: string[]): void {
    const questionElement = this.createBotMessage(question);
    this.appendMessageToChat(questionElement);
  
    for (const option of options) {
      const optionElement = this.createOptionElement(option);
      this.appendMessageToChat(optionElement);
    }
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
    const chatBarBottom = this.elementRef.nativeElement.querySelector('#textInput');
    if (chatBarBottom) {
      chatBarBottom.scrollIntoView({ behavior: 'smooth', block: 'end' });
    }
  }
}
