import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-toast',
  standalone: true,
  imports: [],
  templateUrl: './toast.component.html',
  styleUrl: './toast.component.scss',
  animations: [
    trigger('openClose', [
      state('open', style({ opacity: 1, transform: 'translateX(0px)' })),
      state('closed', style({ opacity: 0, transform: 'translateX(50px)' })),
      transition('open <=> closed', [animate('150ms')]),
    ]),
  ],
})
export class ToastComponent {
  isOpen: boolean = false;

  @Input() userLoggedIn!: { username: string };

  toggle() {
    setTimeout(() => {
      this.isOpen = true;
    }, 300);

    setTimeout(() => {
      this.isOpen = false;
    }, 3000);
  }
}
