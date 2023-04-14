
import { ListarProdutosComponent } from './components/produto/listar-produtos/listar-produtos.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarProdutoComponent } from './components/produto/cadastrar-produto/cadastrar-produto.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'produtos', component:ListarProdutosComponent},
  {path: 'produtos/cadastrar', component:CadastrarProdutoComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
