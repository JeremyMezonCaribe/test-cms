import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { BlogCardComponent } from './components/blog-card/blog-card.component';
import { HttpClientModule } from '@angular/common/http';
import { BlogsService } from './services/blogs.service';
import { BlogDetailComponent } from './pages/blog-detail/blog-detail.component';
import { HeaderComponent } from './shared/header/header.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BlogCardComponent,
    BlogDetailComponent,
    HeaderComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule
  ],
  providers: [
    BlogsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
