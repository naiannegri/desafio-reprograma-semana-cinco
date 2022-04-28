const livros = require('../database')
const read = require('readline-sync')
const app = require('../app')


const livrosRecomendados = () => {
    const opcaoInicial = read.question("Deseja buscar por livros recomendados? S/N ").toUpperCase()
    if (opcaoInicial === "S"){
     for(i=0; i<livros.length; i++){
        livrosMapeados = livros.filter((livros) => livros.recomenda == true && livros.leu == true)
     }
     console.table(livrosMapeados)
    } 
}


module.exports = livrosRecomendados