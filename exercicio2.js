function calcularMedia(nome, primeiraNota, segundaNota) {
  for (var i = 0; i < nome.length; i++) {
    var media = (Number(primeiraNota[i]) * Number(segundaNota[i])) / 2;
    if (media > 7) {
      alert(`A média do(a) aluno(a) ${nome[i]} é ${media}
        \n Parabéns ${nome[i]}! Você foi aprovado(a) no curso!`);
    } else {
      alert(`A média do(a) aluno(a) ${nome[i]} é ${media}
        \n Não foi dessa vez, ${nome[i]}! Tente novamente!`);
    }
  }
}

const nome = ["Matheus", "Laura", "Diego", "Julia", "Pedro"];
const primeiraNota = ["7.5", "6.3", "7.5", "9.5", "5.4"];
const segundaNota = ["9.4", "8.5", "8.2", "9.2", "7.2"];

calcularMedia(nome, primeiraNota, segundaNota);
