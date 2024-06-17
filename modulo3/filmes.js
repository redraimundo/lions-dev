const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let filmes = []

function exibirMenu() {
    console.log(`
    Menu:
    1. Cadastrar filme
    2. Listar todos os filmes
    3. Editar filmes
    4. Remover filme
    5. Sair
    `)


    rl.question('Escolha uma opção: ', (opcao) => {
        switch(opcao) {
            case '1':
                cadastrarFilmes()
                break
            case '2':
                listarFilmes()
                break
            case '3':
                editarFilmes()
                break
            case '4':
                removerFilmes()
                break
            case '5':
                rl.close()
                break
            default:
                console.log('Opção inválida, tente novamente.')
                exibirMenu()
        }
    })
}
exibirMenu()

function cadastrarFilmes() {
    rl.question('Digite o nome do filme: ', (nome) => {
        rl.question('Digite o ano de lançamento filme: ', (ano) => {
            rl.question('Digite o diretor do filme: ', (diretor) => {
                rl.question('Digite o nome ator principal: ', (ator) => {
                    rl.question('Digite o nome de um personagem: ', (personagem) => {
                        filmes.push({nome, ano: parseInt(ano), diretor, ator, personagem})
                        console.log('Filme cadstrado com sucesso.')
                        exibirMenu()
                    })
                })
            })
        })
    })
}

function listarFilmes() {
    if(filmes == 0) {
        console.log('Ainda não há filmes cadastrados.')
    }
    else{
        console.log('Essa é a lista de filmes.')
        filmes.forEach((filmes, index) => {
            console.log(`
            ${index + 1}.
            Nome: ${filmes.nome};
            Ano de lançamento: ${filmes.ano};
            Diretor: ${filmes.diretor}
            Ator: ${filmes.ator}
            Personagem: ${filmes.personagem}.`)
        })
    }
    exibirMenu()
}

function editarFilmes() {
    if(filmes == 0) {
        console.log('Ainda não há filmes cadastrados.')
        exibirMenu()
    }
    else{
        console.log('Lista de filmes.')
        filmes.forEach((filmes, index) => {
            console.log(`${index + 1}. Nome: ${filmes.nome}.`)
        })
        rl.question(`Digite o número do filme: `, (numero) => {
            numero = parseInt(numero)

            if(numero > 0 && numero <= filmes.length) {
                rl.question('Digite o novo nome do filme: ', (nome) => {
                    rl.question('Digite o novo ano de lançamento do filme: ', (ano) => {
                        rl.question('Digite o novo diretor do filme: ', (diretor) => {
                            rl.question('Digite o novo ator principal do filme: ', (ator) => {
                                rl.question('Digite o novo personagem do filme: ', (personagem) => {
                                    filmes[numero - 1] = {nome, ano: parseInt(ano), diretor, ator, personagem}
                                    console.log('Edição concluída com sucesso.')
                                    exibirMenu()
                                })
                            })
                        })
                    })
                })
            }
        })
    }
}

function removerFilmes() {
    if(filmes == 0) {
        console.log('Ainda não há filmes cadastrados.')
        exibirMenu()
    }
    else{
        console.log('Lista de filmes.')
        filmes.forEach((filmes, index) => {
            console.log(`${index + 1}. Nome: ${filmes.nome}`)
        })
        rl.question("Digite o número do filme que você deseja remover: ", (numero) => {
            numero = parseInt(numero) 

            if(numero > 0 && numero <= filmes.length) {
                filmes.splice(numero - 1, 1)
                console.log('Filme excluído com sucesso.') 
                exibirMenu()
            }
            else{
                console.log('Número inválido, tente novamente.')
                exibirMenu()
            }
        })
    }
}