import meucusco from "./casquinha";
import prompt from "prompt-sync";

let cusco: meucusco = new meucusco("Casquinha", 10, 3, 2, 1);
let teclado = prompt();
let option = 0;
while (option != 9) {

    console.log('+======= PERSONAGEM ========+');
    console.log('|1. Treinar Físico          |');
    console.log('|2. Treinar Latido          |');
    console.log('|3. Descansar               |');
    console.log('|4. Impor Respeito          |');
    console.log('|8. Imprimir atributos      |');
    console.log('|9. Sair                    |');
    console.log('+===========================+');

//    option = +teclado("Escolha uma ação: ");
   
if (cusco.dormindo() == false) {
        option = +teclado("Escolha uma ação: ")
    } else {
        option = 9
    }


    switch (option) {
        case 1:
            let horasTreino: number =+teclado ("Digite quantas horas de treinamento: ")
            cusco.treinarFisico(horasTreino);
            cusco.status();
            break;

        case 2:
            cusco.treinarLatido();
            cusco.status();
            break;

        case 3:
            let horas: number =+teclado ("Digite quantas horas de descanço: ")
            cusco.descansar(horas);
            break;

        case 4:
            cusco.imporRespeito();
            cusco.status();
            break;

        case 8:
            cusco.status();
            const status = cusco.status();
            console.log (status) 
            //console.log (cusco.dormindo()) 
            break;
        default:
            break;
    }
    
}
 
console.log("Casquinha cansou e foi dormir.");
