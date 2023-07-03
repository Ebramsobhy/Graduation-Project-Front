import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ResponseService {
  constructor() { }

  getBotResponse(input: string): string {
    if (input === 'اريد رسم كاريكاتير') {
      return 'يمكنك اختيار التصميم الذي تريده';
    } else if (input === 'بكام الاسعار') {
      return 'مجانًا يا فندم';
    } else if (input === 'scissors') {
      return 'rock';
    } else {
       return "من فضلك اختر موضوع من الموضوعات السابقة حتى نتمكن من مساعدتك"
    }
    
    return '';
  }

}
