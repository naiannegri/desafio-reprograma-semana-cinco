const read = require('readline-sync')
const searchBooks = require('./controllers/buscarLivros')
const listaLivrosNaoLidos = require('./controllers/listarLivrosNaoLidos')
const livrosOrdenados = require('./controllers/listarlivrosOrdenados')
const livrosRecomendados = require('./controllers/listarRecomendados')

const resposta = read.question(`
=========== Menu ===========

1 - CATEGORIA: Buscar livro por categoria
2 - ORDENAR: Ordenar livros por quantidade de páginas
3 - RECOMENDADOS: Buscar livros recomendados
4 - LISTA DE DESEJO: Busca livros não lidos

5 - SAIR

Digite um número[1-5]: 
`)

switch(resposta){
    case '1':
        searchBooks()
    break;

    case '2':
        livrosOrdenados()
    break;

    case '3':
        livrosRecomendados()
    break;

    case '4':
        listaLivrosNaoLidos()
    break;

    case '5':
    break;

    default:
        console.log('fim do algoritmo')
    break;
    }