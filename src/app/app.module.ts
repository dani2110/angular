import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { StudentsComponent } from './components/students/students.component';
import { HomeComponent } from './components/home/home.component';
import { MenuNavegacionComponent } from './components/menu-navegacion/menu-navegacion.component';
import { appRouting } from './app.router';
import { StudentsService } from './services/students.service';
import { StudentComponent } from './components/student/student.component';



@NgModule({
  declarations: [
    AppComponent,
    MenuNavegacionComponent,
    AboutComponent,
    StudentsComponent,
    HomeComponent,
    StudentComponent
  ],
  imports: [
    BrowserModule,
    appRouting
  ],
  providers: [
     StudentsService

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
