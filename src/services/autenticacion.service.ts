import { /* inject, */ BindingScope, injectable} from '@loopback/core';
const cryptoJS = require('crypto-js');
const generator = require('password-generator');

@injectable({scope: BindingScope.TRANSIENT})
export class AutenticacionService {
  constructor(/* Add @inject to inject parameters */) { }

  cifrarClave(clave: string): string {
    let claveCifrada = cryptoJS.MD5(clave).toString();

    return claveCifrada;
  }

  generarClave() {
    let clave = generator(8, false);

    return this.cifrarClave(clave);
  }


}
