var posicaoAleatoria = 1 + Math.floor(Math.random() * 5); /* Escolhe um número de forma aleatória entre 1 e 5 */

var parte1 = posicaoAleatoria;
var parte2 = parte1+1;
var parte3 = parte2 +1;

var jogada;
var atingidas = 0;
var totalJogadas = 0;

var foiAfundado = false;


while (foiAfundado == false) {

   jogada = prompt("Podes jogar - Escolhe um numero entre 1 e 7:"); /* Permite ao jogador escolher um número entre 1 e 7 */

	if (jogada < 1 || jogada > 7) {

      alert("Jogada inválida. Tenta de novo!"); /* Caso o jogador insira um valor inválido */

   } else {

      totalJogadas = totalJogadas + 1;

      if (jogada == parte1 || jogada == parte2 || jogada == parte3) {

         alert("Boa, acertaste!"); /* Caso o jogador acerte numa das partes do navio */

         atingidas = atingidas +1;

         if (atingidas == 3) {

            foiAfundado = true;

            alert("Parabéns, afundaste o navio!"); /* Caso o jogador consiga afundar o navio */

         }

      } else {

         alert("Erraste, tenta de novo");

      }
    
   }
}

var estatistica = "Foi preciso um total de " + totalJogadas + " jogadas para afundar o navio, " + 
                          "o que quer dizer que a tua pontaria foi de " + (3/totalJogadas); /* Diz o número de jogadas que o jogador precisou para afundar o navio */

alert(estatistica);