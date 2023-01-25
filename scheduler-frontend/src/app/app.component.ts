import {Component, OnInit} from '@angular/core';
import {SocialAuthService, SocialUser} from "@abacritt/angularx-social-login";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  protected user: SocialUser | undefined

  constructor(private authService: SocialAuthService) {
  }

  title = 'Scheduler Application';

  public ngOnInit() {
    this.authService.authState.subscribe(
      (userData) => {
        console.log(userData)

        this.user = userData

        //For Saving the UserData:
        localStorage.setItem('userId', userData.id)
        localStorage.setItem('token', userData.idToken)
      })
  }

  public socialSignOut() {
    this.authService.signOut().then(_ => {
      console.log("Signed Out")

      //reset localStorage keys:
      localStorage.setItem('userId', '')
      localStorage.setItem('token', '')
    })
  }
}
