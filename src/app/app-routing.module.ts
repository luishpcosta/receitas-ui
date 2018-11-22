import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CadastroReceitaComponent } from './cadastro-receita/cadastro-receita.component';
import { ListagemReceitasComponent } from './listagem-receitas/listagem-receitas.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'cadastro', component: CadastroReceitaComponent },
  { path: 'listar', component: ListagemReceitasComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ]
})

export class AppRoutingModule { }
