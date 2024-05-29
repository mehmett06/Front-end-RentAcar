import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment-page',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './payment-page.component.html',
  styleUrl: './payment-page.component.scss',
  changeDetection:ChangeDetectionStrategy.OnPush,
})
export class PaymentPageComponent {
  
  cardNumber: string = '';
  expDate: string = '';
  options: string[] = ['Option 1', 'Option 2', 'Option 3'];
  selectedOption: string | null = null;

  onCardNumberKeyup(event: KeyboardEvent): void {
    const input = event.target as HTMLInputElement;
    let caretPosition = input.selectionStart ?? 0;
    const sanitizedValue = input.value.replace(/[^0-9]/gi, '');
    const parts: string[] = [];

    for (let i = 0, len = sanitizedValue.length; i < len; i += 4) {
      parts.push(sanitizedValue.substring(i, i + 4));
    }

    for (let i = caretPosition - 1; i >= 0; i--) {
      const c = input.value[i];
      if (c < '0' || c > '9') {
        caretPosition--;
      }
    }
    caretPosition += Math.floor(caretPosition / 4);

    this.cardNumber = parts.join('-');
    input.value = this.cardNumber;
    input.selectionStart = input.selectionEnd = caretPosition;
  }

  onExpDateKeyup(event: KeyboardEvent): void {
    const input = event.target as HTMLInputElement;
    let caretPosition = input.selectionStart ?? 0;
    const sanitizedValue = input.value.replace(/[^0-9]/gi, '');
    const parts: string[] = [];

    for (let i = 0, len = sanitizedValue.length; i < len; i += 2) {
      parts.push(sanitizedValue.substring(i, i + 2));
    }

    for (let i = caretPosition - 1; i >= 0; i--) {
      const c = input.value[i];
      if (c < '0' || c > '9') {
        caretPosition--;
      }
    }
    caretPosition += Math.floor(caretPosition / 2);

    this.expDate = parts.join('/');
    input.value = this.expDate;
    input.selectionStart = input.selectionEnd = caretPosition;
  }

  onRadioClick(option: string): void {
    this.selectedOption = option;
  }
}
