import { Receita } from './../models/receita.model';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ReceitaService } from '../service/receita.service';

@Component({
  selector: 'app-cadastro-receita',
  templateUrl: './cadastro-receita.component.html',
  styleUrls: ['./cadastro-receita.component.css']
})
export class CadastroReceitaComponent implements OnInit {

  receita =  new Receita();

  ingredientes = Array<any>();

  constructor(private receitaService: ReceitaService) { }

  ngOnInit() {
    this.getIngredientes();
  }

  salvar(form: NgForm) {
     this.receitaService.salvarReceita(this.receita).subscribe(res => this.receita = res );
    form.reset();
  }

  getIngredientes() {
    this.receitaService.getIngredientes().subscribe(dados => this.ingredientes = dados);
  }
}
