import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './template/header/header.component';
import { MainComponent } from './template/main/main.component';
import { FooterComponent } from './template/footer/footer.component';
import { HomeComponent } from './home/home/home.component';
import { FormularioComponent } from './formulario/formulario/formulario.component';
import { Tarefa1Component } from './principal/tarefas/tarefa1/tarefa1.component';
import { Tarefa2Component } from './principal/tarefas/tarefa2/tarefa2.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    FooterComponent,
    HomeComponent,
    FormularioComponent,
    Tarefa1Component,
    Tarefa2Component,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
