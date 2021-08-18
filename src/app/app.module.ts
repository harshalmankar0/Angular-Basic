import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ServerComponent } from './server/server.component';
import { UsersComponent } from './users/users.component';

const appRoutes: Routes = [
  { path: 'users', component: UsersComponent},
  { path: 'server', component: ServerComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    UsersComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
