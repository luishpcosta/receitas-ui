import { ReceitaService } from './../service/receita.service';
import { Component, OnInit } from '@angular/core';
import { Receita } from '../models/receita.model';

@Component({
  selector: 'app-listagem-receitas',
  templateUrl: './listagem-receitas.component.html',
  styleUrls: ['./listagem-receitas.component.css'],
})
export class ListagemReceitasComponent implements OnInit {

  receitas = Array<any>();
  display = false;
  receita = new Receita();

  constructor(private receitaService: ReceitaService) {}

  ngOnInit(): void {
    this.consultar();
  }
   consultar() {
    this.receitaService.consultar().subscribe(dados => this.receitas = dados );
   }

  verdetalhes(id: number) {
    this.receitaService.consultarReceita(id).subscribe(dados => this.receita = dados);

    setTimeout(() => {
      this.display = true;
    }, 500);
  }
}
