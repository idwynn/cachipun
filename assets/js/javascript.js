alert("Bienvenido al chachipún!");
let contador = +prompt("Ingrese la cantidad de veces que quiere jugar");
for (i=1; i<= contador; i++){
    let opc = +prompt ("Ingresa tu eleccion (0 = PIEDRA, 1 = PAPEL, 2 = TIJERA)");
    var maquina = Math.floor(Math.random()*3);
   switch (opc) {
    case (0):
        if (maquina == 0){
            alert("Has empatado, la maquina escogió PIEDRA y tu lo mismo!");
        }else{
            if(maquina == 1){
                alert("Lo siento! Has perdido contra la maquina, la maquina escogió PAPEL y tu escogiste PIEDRA!");
            }else{
                if(maquina==2){
                alert("Felicidades! Ganaste contra la maquina! la maquina escogió TIJERA y tu escogiste PIEDRA!");
            }
            }
        }
        break;

    case (1):
        if (maquina == 1){
            alert("Has empatado, la maquina escogió PAPEL y tu lo mismo!");
        }else{
            if(maquina == 2){
                alert("Lo siento! Has perdido contra la maquina, la maquina escogió TIJERA y tu escogiste PAPEL!");
            }else{
                if(maquina==0){
                alert("Felicidades! Ganaste contra la maquina! la maquina escogió PIEDRA y tu escogiste PAPEL!");
            }
            }
        }
        break;

    case (2):
        if (maquina == 2){
            alert("Has empatado, la maquina escogió TIJERA y tu lo mismo!");
        }else{
            if(maquina == 0){
                alert("Lo siento! Has perdido contra la maquina, la maquina escogió PIEDRA y tu escogiste TIJERA!");
            }else{
                if(maquina==1){
                alert("Felicidades! Ganaste contra la maquina! la maquina escogió PAPEL y tu escogiste TIJERA!");
            }
            }
        }
        break;
        
    default: 
        alert("No es una opcion valida");
    
   }

}




