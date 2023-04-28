import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent
{
  nta = 5;
  ntb = 7;
  ntc = 1;
  ntd = 1;
  media = ( this.nta + this.ntb + this.ntc + this.ntd )/ 4;

  nta1 = 5;
  ntb1 = 7;
  ntc1 = 10;
  ntd1 = 5;
  media1 = ( this.nta1 + this.ntb1 + this.ntc1 + this.ntd1 )/ 4;

  nta2 = 5;
  ntb2 = 7;
  ntc2 = 10;
  ntd2 = 10;
  media2 = ( this.nta2 + this.ntb2 + this.ntc2 + this.ntd2 )/ 4;
  
  aprovado: string = "../../../assets/aprovado.jpg"
  namedia: string = "../../../assets/namedia.jpg"
  reprovado: string = "../../../assets/reprovado.jpg"
  perfil: string = "../../../assets/main.jpg"
constructor() {

              }
}


/*ex 3
var a = 10;
var b = 20;
function bar(){
  var a = 30;
  let b = 40;
  if(true) {
    var a = 50;
    let b = 60;
    console.log('Variável a dentro do if', a);
    console.log('Variável b dentro do if', b);
            }
  console.log('Variável a dentro da função', a);
  console.log('Variável b dentro da função', b);
              }
bar();
console.log('Variável a fora da função', a)
console.log('Variável b fora da função', b)*/

  /*ex 4
  let a = 1;
  function bar(){
    console.log('variavel a: ',a);
    let b = 2;
    if(true){
      let c = 3;
      let a = 4;
      console.log('Variável a dentro do if', a);
      console.log('Variável b dentro do if', b);
      console.log('Variável c dentro do if', c);
    }
    console.log('Variável a dentro do if', a);
    console.log('Variável b dentro do if', b);
    console.log(c);
  }
bar();
*/

/* ex 5
  var a = 5;
  var b = 10;
  if(a = 5){
    let a = 4;
    var b = 1;
    console.log('Variável a dentro do if', a);
    console.log('Variável b dentro do if', b);
  }
  console.log('Variável a fora do if', a);
  console.log('Variável b fora do if', b);*/
