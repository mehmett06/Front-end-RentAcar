import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class ButtonComponent {
  @Input() type: 'button' | 'submit' | 'reset' = 'button';

  @Input() variant: ButtonVariant = 'primary';
  @Output() click = new EventEmitter<MouseEvent>();

  onClick(event: MouseEvent) {
    this.click.emit(event);
  }

  get buttonClass():string{
    return `btn btn-${this.variant}`;
  }


}

export type ButtonVariant =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'danger'
  | 'warning'
  | 'info'
  | 'light'
  | 'dark'
  | 'link';
