/*const palavraaleatoria = "bola";
const palvaraSplit = palavraaleatoria.split("");
console.log(palvaraSplit);
let tentativas = 6;
let letrapressionada = "a";
const letrarevelada = Array(palvaraSplit.length).fill("");
console.log(letrarevelada);
function encontrarletra(letra) {
  console.log(`Letra pressionada: ${letra}`);
  let encontrada = false;
  for (let index = 0; index < palvaraSplit.length; index++) {
    const element = palvaraSplit[index];
    if (element == letrapressionada) {
      letrarevelada[index] = letrapressionada;
      encontrada = true;
      console.log("você acertou");
    }
  }
  if (encontrada == false) {
    tentativas--;
    console.log("você errou");
  }
}
console.log(letrarevelada);
encontrarletra("i");
console.log(`tentativas: ${tentativas}`);

console.log(letrarevelada);
encontrarletra("t");
console.log(`tentativas: ${tentativas}`);

console.log(letrarevelada);
encontrarletra("a");
console.log(`tentativas: ${tentativas}`);
/*const  ["b", "o", "l", "a"]*/

const palavraAleatoria = ["java", "node", "bola", "bibibleta"];
const palavraSecreta =
  palavraAleatoria[Math.floor(Math.random() * palavraAleatoria.length)]; //sorteio de palavra
const letrasErradas = [];
const letrasCorretas = [];

document.addEventListener("keydown", (evento) => {
  //identificar toda vez que apertar uma tecla
  const codigo = evento.keyCode; //65 -90 (intervalo)
  if (isLetra(codigo)) {
    const letra = evento.key; //pega a letra que a pessoa digitou
    //validação para ver se a letra faz parte ou não da palavra
    if (letrasErradas.includes(letra)) {
      mostrarAvisoLetraRepetida();
    } else {
      if (palavraSecreta.includes(letra)) {
        //se a letra digitar estiver inclusa na palavra ele vai guardar, se não vai guardar em letras erradas
        letrasCorretas.push(letra);
      } else {
        letrasErradas.push(letra);
      }
    }
    atualizarJogo();
  }
});
function atualizarJogo() {
  mostrarLetrasErradas();
}
function mostrarLetrasErradas() {
  const div = document.querySelector(".letras-erradas-container");
  letrasErradas.forEach((letra) => {
    div.innerHTML += `<span>${letra}</span>`;
  });
}

function mostrarAvisoLetraRepetida() {
  //vai mostrar o aviso e depois vai tirar
  const aviso = document.querySelector(".aviso-palavra-repetida");
  aviso.classList.add("show");
  setTimeout(() => {
    aviso.classList.remove("show");
  }, 1000); //depois de um segundo vai tirar essa classe desse elemento
}

function isLetra(codigo) {
  return codigo >= 65 && codigo <= 90; //vai confirmar se aquilo que eu estou trabalhando é realmente uma letra
}
