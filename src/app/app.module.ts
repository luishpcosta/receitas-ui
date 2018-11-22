import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {TableModule} from 'primeng/table';
import {ButtonModule} from 'primeng/button';
import {DialogModule} from 'primeng/dialog';
import {InputTextModule} from 'primeng/inputtext';
import {MultiSelectModule} from 'primeng/multiselect';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';


import { AppComponent } from './app.component';
import { ListagemReceitasComponent } from './listagem-receitas/listagem-receitas.component';
import { ReceitaService } from './service/receita.service';
import { CadastroReceitaComponent } from './cadastro-receita/cadastro-receita.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './/app-routing.module';
import { HomeComponent } from './home/home.component';



@NgModule({
  declarations: [
    AppComponent,
    ListagemReceitasComponent,
    CadastroReceitaComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    TableModule,
    ButtonModule,
    HttpClientModule,
    DialogModule,
    InputTextModule,
    FormsModule,
    MultiSelectModule,
    MessagesModule,
    MessageModule,
    AppRoutingModule
  ],
  providers: [ReceitaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
