import { Component, OnInit } from "@angular/core";
import { LoginService } from "./login.service";

@Component({
  selector: "login-page",
  templateUrl: "login-page.component.html"
})

export class LoginPageComponent implements OnInit {
  constructor(private loginService: LoginService) {}

  ngOnInit() {}

  onSubmit(nickname: string) {
    this.loginService.login(nickname);
  }
}
