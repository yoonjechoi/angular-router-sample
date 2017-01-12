import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {AppComponent} from "./app.component";
import {AppRoutingModule} from "./app-routing.module";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";
import {HeroesModule} from "./heroes/heroes.module";
import {CrisisCenterModule} from "./crisis-center/crisis-center.module";
import {ComposeMessageComponent} from "./compose-message/compose-message.component";
import {AdminModule} from "./admin/admin.module";
import {LoginRoutingModule} from "./auth/login-routing.module";
import {DialogService} from "./dialog.service";

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    ComposeMessageComponent,
    // LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HeroesModule,
    LoginRoutingModule,

    /*
      FIXME
      To be removed
     */

    CrisisCenterModule,
    AdminModule,

    AppRoutingModule
  ],
  providers: [
    DialogService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
