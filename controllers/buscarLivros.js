const livros = require('../database')
const read = require('readline-sync')
const app = require('../app')

let categories = []

const searchBooks = () => {
    const opcaoInicial = read.question("Deseja buscar por categoria? S/N ").toUpperCase()
   
    if (opcaoInicial == 'S'){
        for(i=0; i<livros.length; i++) { 
           let categorias = livros.map(livro => livro.categoria)
           
           //remove categorias repetidas
           categorias = categorias.filter((item, index) => categorias.indexOf(item) === index) 
           console.table(categorias)

           const opcaoCategoria = read.question("Digita uma categoria conforme tabela acima ")
            
           const confirmacao = read.question("Tem certeza? S/N ").toUpperCase()

           if (confirmacao === 'S'){
               const livrosFiltrados = livros.filter(livro => livro.categoria === opcaoCategoria)
               console.table(livrosFiltrados)
               break
        }

}
}
}
module.exports = searchBooks