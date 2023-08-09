// Solicita informações ao candidato
const capacidadeMagica = prompt("Qual é a sua capacidade mágica dominante? (Fogo, Cura, Transformação, Ilusão)");
const habilidadeEspecifica = prompt("Qual é a sua habilidade específica? (Controle de Elementos, Invocação de Criaturas Místicas, Leitura de Pergaminhos Antigos, Feitiços de Proteção)");
const respeitoMagia = parseInt(prompt("Em uma escala de 1 a 10, qual é o seu grau de respeito pela magia?"));
const eticaUtilizacao = prompt("Você adere à ética na utilização dos poderes? (Sim ou Não)");
const trabalhoEquipe = prompt("Você está disposto a trabalhar em equipe? (Sim ou Não)");
const aprendizadoConstante = prompt("Você deseja aprender constantemente? (Sim ou Não)");

// Avalia o candidato
if ((capacidadeMagica === "Fogo" && habilidadeEspecifica === "Controle de Elementos") ||
    (capacidadeMagica === "Cura" && habilidadeEspecifica === "Feitiços de Proteção") ||
    (capacidadeMagica === "Transformação" && respeitoMagia >= 8) ||
    (capacidadeMagica === "Ilusão" && eticaUtilizacao === "Sim" && trabalhoEquipe === "Sim")) {
  console.log("Parabéns! Você passou no teste e está qualificado para se tornar um aprendiz na Academia Arcana.");
} else {
  console.log("Infelizmente, você não atende aos requisitos para se tornar um aprendiz na Academia Arcana.");
}
