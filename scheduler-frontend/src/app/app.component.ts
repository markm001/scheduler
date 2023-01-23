import {Component, OnInit} from '@angular/core';
import {GoogleLoginProvider, SocialAuthService, SocialUser} from "@abacritt/angularx-social-login";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  protected user: SocialUser | undefined

  constructor(private authService:SocialAuthService) { }
  title = 'Scheduler Application';

  public ngOnInit() {
    this.authService.authState.subscribe(
      (userData) => {
        console.log(userData)

        this.user = userData
      })
  }
  public socialSignOut() {
    this.authService.signOut().then(_ => {
        console.log("Signed Out")
      })
  }
}
