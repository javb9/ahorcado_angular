import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  palabra = 'AGUACATE';
  palabraOculta = '_ ';
  intentos = 0;
  puntaje = 0;


  gano = false;
  perdio = false;

  letras = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J',
    'K', 'L', 'M', 'N', 'Ñ', 'O', 'P', 'Q', 'R', 'S',
    'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

  constructor() {
    this.palabraOculta = '_ '.repeat(this.palabra.length);
  }

  comprobar(letra: string) {

    this.existeLetra(letra);
    let palabraOcultaArray = this.palabraOculta.split(' ');

    for (let i = 0; i < this.palabra.length; i++) {
      if (this.palabra[i] === letra) {
        palabraOcultaArray[i] = letra;
      }
    }
    this.palabraOculta = palabraOcultaArray.join(' ');
    this.verificarGano();

  }

  verificarGano() {
    const palabraArr = this.palabraOculta.split(' ');
    var palabraEvaluar = palabraArr.join('');
    if (palabraEvaluar == this.palabra) {
      this.gano = true;
    }
  }

  existeLetra(letra: string) {
    if (this.palabra.indexOf(letra) < 0) {
      this.intentos++;
      if (this.intentos == 9) {
        this.perdio = true;
      }
    } else {
      if (this.intentos == 0 && this.intentos <= 3) {
        this.puntaje = this.puntaje + 10;
      } else if (this.intentos > 3 && this.intentos <= 6) {
        this.puntaje = this.puntaje + 6;
      } else if (this.intentos > 6) {
        this.puntaje = this.puntaje + 3;
      }
    }
  }

  reset() {
    this.intentos = 0;
    this.palabraOculta = '_ '.repeat(this.palabra.length);
    this.gano = false;
    this.perdio = false;
    this.puntaje = 0;
  }

}
