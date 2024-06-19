const readline = require('readline')
console.log('Olá')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})


let funcionarios = []


function exibirMenu() {
    console.log(`
    Menu:
    1. Cadastrar funcionário
    2. Listar todos os funcionários
    3. Exibir funcionário com maior salário
    4. Remover funcionário
    5. Editar funcionário
    6. Sair
    `)


    rl.question('Escolha uma opção: ', (opcao) => {
        switch (opcao) {
            case '1':
                cadastrarFuncionario()
                break
            case '2':
                listaFuncionarios()
                break
            case '3':
                exibirMaiorSalario()
                break
            case '4':
               removerFuncionario()
                break
            case '5':
            editarFuncionario()
                break    
            case '6':
                rl.close()
                break
            default:
                console.log('Opção inválida, tente novamente.')
                exibirMenu()
                break
        }
    })
}
exibirMenu()


function cadastrarFuncionario() {
    rl.question('Digite o nome do funcionário: ', (nome) => {
        rl.question('Digite o cargo do funcionário: ', (cargo) => {
            rl.question('Digite o salário do funcionário: ', (salario) => {
                funcionarios.push({ nome: nome, cargo: cargo, salario: parseFloat(salario) })
                console.log('Funcionário cadastrado com sucesso!')
                exibirMenu()
            })
        })
    })
}


function listaFuncionarios() {
    if(funcionarios == 0) {
        console.log("Ainda não há funcionários")
    }
    else{
        console.log("Essa é a lista de funcinários: ")
        for(let i = 0; i < funcionarios.length; i ++) {
           console.log(`Nome: ${funcionarios[i].nome}; Cargo: ${funcionarios[i].cargo}; Salário: ${funcionarios[i].salario}`)
        }
    }
    exibirMenu()
}


function exibirMaiorSalario() {


    let maior = funcionarios[0]
    let posicao = 0


    if(funcionarios == 0) {
        console.log("Ainda não há funcionários")
        exibirMenu()
    }
    else{
        console.log("Esse é o funcionário com maior salário")
        for(let i = 0; i <= funcionarios.length; i ++) {
            if(funcionarios[i].salario > maior) {
                maior = funcionarios[i].salario
                posicao = i
            }
        }
    }
    console.log(`Nome: ${funcionarios[posicao].nome}; Cargo: ${funcionarios[posicao].cargo}; Salário: ${funcionarios[posicao].salario}`)
    exibirMenu()
}

function removerFuncionario() {
    if(funcionarios == 0) {
        console.log('Ainda não há funcionários cadastrados.')
    }
    else{
        console.log('Lista de funcionários.')
        funcionarios.forEach((funcionarios, index) => {
            console.log(`${index + 1}. ${funcionarios.nome}`)
        })
        rl.question('Digite o número do funcionário que deseja remover: ', (numero) => {
            numero = parseInt(numero)

            if(numero > 0 && numero <= funcionarios.length) {
                funcionarios.splice(numero - 1, 1)
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

function editarFuncionario() {
    if(funcionarios == 0) {
        console.log('Ainda não há funcionários cadastrados.')
    }
    else{
        console.log('Lista de funcionários')
        funcionarios.forEach((funcionarios, index) => {
            console.log(`${index + 1}. ${funcionarios.nome}`)
        })
        rl.question('Dgite o número do funcionário que deseja editar: ', (numero) => {
            numero = perseInt(numero)

            if(numero > 0 && numero < funcionarios.length) {
                rl.question('Digite o novo nome do funcionário: ', (nome) => {
                    rl.question('Digite o novo cargo do funcionario: ', (cargo) => {
                        rl.question('Digite o novo salário do funcionário: ', (salario) => {
                            funcionarios[numero - 1] = {nome, cargo, salario: parseInt(salario)}
                            console.log('Edição concluída.')
                            exibirMenu()
                        })
                    })
                })
            }
        })
    }
}
