import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms"

import { AppComponent } from "./app.component";
import { LoginPageComponent } from "./login-page.component";
import { LoginFormComponent } from "./login-form.component";
import { LoginService } from "./login.service";
const routes: Routes = [{ path: "", component: LoginPageComponent }];

@NgModule({
  declarations: [AppComponent, LoginPageComponent, LoginFormComponent],
  imports: [BrowserModule, RouterModule.forRoot(routes), FormsModule, ReactiveFormsModule],
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule {}
