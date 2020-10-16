import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { NewsComponent } from './components/news/news.component';
import { EditnewsComponent } from './components/editnews/editnews.component';
import { NewsEditorComponent } from './components/news-editor/news-editor.component';
import { AddNewsComponent } from './components/add-news/add-news.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'news', component: NewsComponent },
  { path: 'editnews', component: EditnewsComponent },
  { path: 'newseditor', component: NewsEditorComponent },
  { path: 'addnews', component: AddNewsComponent },

  // Fallback when no prior route is matched
  { path: '**', redirectTo: 'news', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {}
