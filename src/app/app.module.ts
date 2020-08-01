import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { LogFormComponent } from "./components/log-form/log-form.component";
import { LogsComponent } from "./components/logs/logs.component";
import { LogsService } from "./services/logs.service";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LogFormComponent,
    LogsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [LogsService],
  bootstrap: [AppComponent],
})
export class AppModule {}
