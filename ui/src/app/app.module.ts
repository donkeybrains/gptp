import { BrowserModule } from "@angular/platform-browser";
import { NgModule, OnInit } from "@angular/core";
import { HttpClientModule, HttpClient } from "@angular/common/http";
import { Routes, RouterModule } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { LoginPageComponent } from "./login-page.component";
import { LoginFormComponent } from "./login-form.component";
import { LoginService } from "./login.service";
import { HistoryPageComponent } from "./history-page/history-page.component";
import { HistoryService } from "./history.service";
import { MembersOnlineService } from "./members-online.service";

import { Observable } from "rxjs/Observable";
import { OnlineUserPageComponent } from "./online-user-page/online-user-page.component";
import { MembersOnlinePageComponent } from "./members-online-page/members-online-page.component";

const routes: Routes = [
  { path: "", component: LoginPageComponent },
  { path: "history", component: HistoryPageComponent },
  { path: "users", component: MembersOnlinePageComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    LoginFormComponent,
    HistoryPageComponent,
    OnlineUserPageComponent,
    MembersOnlinePageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [LoginService, HistoryService, MembersOnlineService],
  bootstrap: [AppComponent]
})
export class AppModule implements OnInit {
  title: string = "app";

  constructor() {}

  ngOnInit(): void {}
}
