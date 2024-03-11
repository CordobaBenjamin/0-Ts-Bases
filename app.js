"use strict";
(() => {
    // Tipos
    const batman = 'Bruce';
    const superman = 'Clark';
    const existe = false;
    // Tuplas
    const parejaHeroes = [batman, superman];
    const villano = ['Lex Lutor', 5, true];
    // Arreglos
    const aliados = ['Mujer Maravilla', 'Acuaman', 'San', 'Flash'];
    //Enumeraciones
    let powerForce;
    (function (powerForce) {
        powerForce[powerForce["Acuaman"] = 0] = "Acuaman";
        powerForce[powerForce["batman"] = 1] = "batman";
        powerForce[powerForce["Flash"] = 5] = "Flash";
        powerForce[powerForce["superman"] = 100] = "superman";
    })(powerForce || (powerForce = {}));
    const fuerzaFlash = powerForce.Flash;
    const fuerzaSuperman = powerForce.superman;
    const fuerzaBatman = powerForce.batman;
    const fuerzaAcuaman = powerForce.Acuaman;
    // Retorno de funciones
    function activar_batiseñal() {
        return 'activada';
    }
    function pedir_ayuda() {
        console.log('Auxilio!!!');
    }
    // Aserciones de Tipo
    const poder = '100';
    const largoDelPoder = poder.length;
    console.log(largoDelPoder);
})();
