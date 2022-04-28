const livros = require('../database')
const read = require('readline-sync')
const app = require('../app')

let livrosMapeados = []
const listaLivrosNaoLidos = () => {
    
    const opcaoInicial = read.question("Deseja buscar por livros não lidos? S/N ").toUpperCase()
   if (opcaoInicial === "S"){
    for(i=0; i<livros.length; i++){
       livrosMapeados = livros.filter((livros) => livros.leu == false)
    }
    console.table(livrosMapeados)
   }

}

module.exports = listaLivrosNaoLidos