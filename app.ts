(() => {

    // Tipos
    const batman:string = 'Bruce';
    const superman:string = 'Clark';
  
    const existe:boolean = false;
  
    // Tuplas
    const parejaHeroes:[string, string] = [batman,superman];
    const villano:[string, number, boolean] = ['Lex Lutor',5,true];
  
    // Arreglos
    const aliados:string [] = ['Mujer Maravilla','Acuaman','San', 'Flash'];
  
    //Enumeraciones
   
   enum powerForce {
    Acuaman = 0,
    batman = 1,
    Flash = 5,
    superman = 100,
   }

    const fuerzaFlash:number = powerForce.Flash;
    const fuerzaSuperman:number = powerForce.superman;
    const fuerzaBatman:number = powerForce.batman;
    const fuerzaAcuaman:number = powerForce.Acuaman;

    // Retorno de funciones
    function activar_batiseñal():string{
      return 'activada';
    }
  
    function pedir_ayuda():any{
    console.log('Auxilio!!!');
    }
  
    // Aserciones de Tipo
    const poder: any = '100';
    const largoDelPoder:number = poder.length;
    console.log( <number>largoDelPoder );
  
  
  })()
  
  