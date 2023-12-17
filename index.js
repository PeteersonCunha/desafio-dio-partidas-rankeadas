let numeroVitorias;
let numeroDerrotas;
let numeroTotalVitorias;
let nivel;

numeroTotalVitorias = numeroVitorias - numeroDerrotas;

if (numeroTotalVitorias < 10){
    nivel = "Ferro";
}

else if (numeroTotalVitorias >= 11 && numeroTotalVitorias <= 20 ){
    nivel = "Bronze"; 
}

else if(numeroTotalVitorias >=21 && numeroTotalVitorias <= 50){
    nivel = "Prata";
}

else if(numeroTotalVitorias >= 51 && numeroTotalVitorias <= 80 ){
    nivel = "Ouro";
}

else if(numeroTotalVitorias >= 81 && numeroTotalVitorias <= 90){
    nivel = "Diamante"
}

else if(numeroTotalVitorias >= 91 && numeroTotalVitorias <= 100){
    nivel = "Lendário"
}

else if(numeroTotalVitorias >= 101){
    nivel = "Imortal"
}

console.log("O herói tem " + numeroTotalVitorias + " vitória(s) no total e está no nível: " + nivel + ".");