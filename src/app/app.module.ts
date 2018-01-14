import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule , Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ShowcaseComponent } from './components/showcase/showcase.component';
import { NewsletterComponent } from './components/newsletter/newsletter.component';
import { BoxesComponent } from './components/boxes/boxes.component';


const appRoutes: Routes = [
  {path: '', component: HeaderComponent},
  {path: '', component: ShowcaseComponent},
  {path: '', component: NewsletterComponent},
  {path: '', component: BoxesComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShowcaseComponent,
    NewsletterComponent,
    BoxesComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, { enableTracing: true })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
