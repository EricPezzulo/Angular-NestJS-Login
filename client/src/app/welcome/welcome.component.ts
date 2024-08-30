import { Component } from '@angular/core';
import { User, UserService } from '../user.service';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [MatIconModule, RouterLink],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.scss',
})
export class WelcomeComponent {
  user!: User;

  constructor(private userService: UserService) {
    this.user = userService.getUser();
  }
}
