/*
  Clase Pokemon que permite al pokemon dado saludar y decir un mensaje
*/

export default class Pokemon {
  constructor(name) {
    this.name = name
  }

  sayHello(){
    console.log(`Mi pokemon ${this.name} te saluda!!!`);
  }

  sayMessage(message){
    console.log(`Mi pokemon ${this.name} dice: ${message}`);
  }

}
