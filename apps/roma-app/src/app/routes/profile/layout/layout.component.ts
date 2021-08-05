/* eslint-disable @angular-eslint/component-selector */
import { Component, OnInit } from '@angular/core'
import { User } from '@simples-empresa/angular/core'
import { AuthService } from '@simples-empresa/angular/core'

@Component({
  selector: 'app-profile-layout',
  templateUrl: './layout.component.html',
})
export class ProfileLayoutComponent implements OnInit {
  user!: User

  constructor(private auth: AuthService) {}

  ngOnInit(): void {
    this.auth.user().subscribe((user: any) => (this.user = user))
  }
}
