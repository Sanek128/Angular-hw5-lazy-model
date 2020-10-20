import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { PostModule } from './modules/post/post.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    // PostModule,
    RouterModule.forRoot([
      {path: '', loadChildren: () => import ('./modules/post/post.module').then(m => m.PostModule)},
      {path: '', loadChildren: () => import ('./modules/user/user.module').then(u => u.UserModule)},
      {path: '', loadChildren: () => import ('./modules/comment/comment.module').then(c => c.CommentModule)}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
