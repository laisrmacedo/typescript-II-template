/* EXERCÍCIO DE FIXAÇÃO
1. Crie um novo objeto. Este objeto é uma pessoa e deve possuir três propriedades:
  a. nome, que é uma string;
  b. idade, que é um número;
  c. corFavorita, que é uma string.

2. Crie mais três objetos, que também precisam ter apenas os campos definidos acima. Crie um type Pessoa para garantir
que todos os objetos tenham as mesmas propriedades.

3. Modifique o type Pessoa para que possamos escolher apenas entre as cores do arco-íris. Utilize um enum para isso.
*/

//1
type TPessoa = { 
  nome: string,
  idade: number,
  corFavorita: Cores
}

// const pessoa1: TPessoa = {
//   nome: "lais",
//   idade: 27,
//   corFavorita: "marrom"
// }

// //2
// const pessoa2: TPessoa = {
//   nome: "joao",
//   idade: 16,
//   corFavorita: "preto"
// }

// const pessoa3: TPessoa = {
//   nome: "maria",
//   idade: 43,
//   corFavorita: "azul"
// }

// const pessoa4: TPessoa = {
//   nome: "ana",
//   idade: 33,
//   corFavorita: "rosa"
// }

//3
enum Cores {
  VERMELHO  = "vermelho", 
  LARANJA = "laranja", 
  AMARELO = "amarelo", 
  VERDE = "verde", 
  AZUL = "azul", 
  AZULESCURO = "azul-escuro",
  VIOLETA = "violeta"
}

const pessoa1: TPessoa = {
  nome: "lais",
  idade: 27,
  corFavorita: Cores.AZULESCURO
}

//2
const pessoa2: TPessoa = {
  nome: "joao",
  idade: 16,
  corFavorita: Cores.VERMELHO
}

const pessoa3: TPessoa = {
  nome: "maria",
  idade: 43,
  corFavorita: Cores.AZUL
}

const pessoa4: TPessoa = {
  nome: "ana",
  idade: 33,
  corFavorita: Cores.VIOLETA
}
