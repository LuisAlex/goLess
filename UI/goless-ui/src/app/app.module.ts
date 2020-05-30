import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {APP_ROUTES} from './routes';
import { RegisterComponent } from './login/register.component';
import {PagesModule} from './pages/pages.module';
import {FormsModule} from '@angular/forms';
import {GraficasComponent} from './shared/graficas/graficas.component';
import {SettingsService} from './services/settings.service';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    GraficasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    APP_ROUTES,
    PagesModule,
    FormsModule
  ],
  providers: [SettingsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
