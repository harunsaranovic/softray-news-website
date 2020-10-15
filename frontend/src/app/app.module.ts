import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TranslateModule } from '@ngx-translate/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { CoreModule } from '@app/core';
import { SharedModule } from '@app/shared';
import { ShellModule } from './shell/shell.module';
import { AboutModule } from './about/about.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { UsersService } from '@app/services/users.service';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { NewsComponent } from './components/news/news.component';
import { EditnewsComponent } from './components/editnews/editnews.component';
import { NewsEditorComponent } from './components/news-editor/news-editor.component';
import { AddNewsComponent } from './components/add-news/add-news.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    TranslateModule.forRoot(),
    NgbModule,
    CoreModule,
    SharedModule,
    ShellModule,
    AboutModule,
    FlashMessagesModule.forRoot(),
    AppRoutingModule // must be imported as the last module as it contains the fallback route
  ],
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    NewsComponent,
    EditnewsComponent,
    NewsEditorComponent,
    AddNewsComponent
  ],
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule {}
