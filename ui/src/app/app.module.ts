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

import { Observable } from "rxjs/Observable";

const routes: Routes = [
  { path: "", component: LoginPageComponent },
  { path: "history", component: HistoryPageComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    LoginFormComponent,
    HistoryPageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [LoginService, HistoryService],
  bootstrap: [AppComponent]
})
export class AppModule implements OnInit {
  title: string = "app";

  constructor() {}

  ngOnInit(): void {}
}
