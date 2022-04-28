const livros = require('../database')
const read = require('readline-sync')
const app = require('../app')



let pages = []
let paginasOrdenadas = []
const livrosOrdenados = () => {
    const opcaoInicial = read.question("Deseja buscar por livros ordenados por página? S/N ").toUpperCase()
    if (opcaoInicial === "S")
    {
    for(i=0; i<livros.length; i++) {
            pages.push(livros[i].paginas)
        } 
    let lowestToHighest = pages.sort((a, b) => a - b)
    for(i=0; i<livros.length; i++){
        for(j=0; j<pages.length; j++){
            if(lowestToHighest[i] == livros[j].paginas){
                paginasOrdenadas.push(livros[j])
            }

        }
    }
        
        console.table(paginasOrdenadas)
} 
    }

module.exports = livrosOrdenados